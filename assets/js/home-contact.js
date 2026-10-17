/**
 * 首页联系我们模块
 * 功能：收集客户邮箱，通过 gmailsend 服务发送通知邮件给站长
 */

(function() {
    const API_URL = 'https://gmailsend.404108.xyz/';
    const TIMEOUT_MS = 12000; // 12秒超时
    const MAX_RETRIES = 2;

    function sendWithTimeout(url, options, timeout) {
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), timeout);
        return fetch(url, { ...options, signal: controller.signal })
            .finally(() => clearTimeout(id));
    }

    async function sendMailWithRetry(payload, retriesLeft) {
        try {
            const response = await sendWithTimeout(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            }, TIMEOUT_MS);
            if (!response.ok) throw new Error('HTTP ' + response.status);
            let data = null;
            try { data = await response.json(); } catch (e) { /* ignore */ }
            if (data && data.status === 'success') return { ok: true };
            throw new Error((data && data.message) ? data.message : '邮件服务返回未知错误');
        } catch (err) {
            if (retriesLeft > 0) {
                await new Promise(r => setTimeout(r, 1500));
                return sendMailWithRetry(payload, retriesLeft - 1);
            }
            return { ok: false, error: err.message || '网络请求失败' };
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        const btn = document.getElementById('contact-submit');
        const emailInput = document.getElementById('contact-email');
        const statusEl = document.getElementById('contact-status');

        if (!btn || !emailInput || !statusEl) return;

        btn.addEventListener('click', async function() {
            const email = emailInput.value.trim();

            // 简单邮箱格式校验
            if (!email || !email.includes('@') || !email.includes('.')) {
                statusEl.textContent = '请输入有效的邮箱地址';
                statusEl.style.color = '#dc2626';
                return;
            }

            // 防止重复提交
            if (btn.disabled) return;
            btn.disabled = true;
            const originalText = btn.textContent;
            btn.textContent = '发送中...';
            statusEl.textContent = '正在提交，请稍候...';
            statusEl.style.color = '#2563eb';

            const adminEmail = 'frankjason121380@gmail.com';
            const subject = '【心灵方舟】有新客户留下联系邮箱';
            const body = `<div style="font-family:'Microsoft YaHei',Arial,sans-serif;padding:20px;line-height:1.8;color:#333;">
                <h2 style="color:#1a5f7a;margin-bottom:15px;">新的客户联系邮箱</h2>
                <p><strong>客户邮箱：</strong>${email}</p>
                <p><strong>来源页面：</strong>网站首页 - 联系我们模块</p>
                <p><strong>提交时间：</strong>${new Date().toLocaleString('zh-CN')}</p>
                <hr style="border:none;border-top:1px solid #eee;margin:20px 0;">
                <p style="color:#666;font-size:14px;">本邮件由网站自动发送，请勿直接回复。</p>
            </div>`;

            const result = await sendMailWithRetry(
                { email: adminEmail, subject: subject, body: body },
                MAX_RETRIES
            );

            btn.disabled = false;
            btn.textContent = originalText;

            if (result.ok) {
                statusEl.textContent = '提交成功，我们会尽快与您联系';
                statusEl.style.color = '#059669';
                emailInput.value = '';
            } else {
                const errText = (result.error || '');
                const friendly = errText.includes('上限') || errText.toLowerCase().includes('size') || errText.includes('too large')
                    ? '邮件内容过大，超出邮件服务限制'
                    : (errText || '未知错误');
                statusEl.innerHTML = '<span style="color:#dc2626;">邮件发送失败：' + friendly + '。</span>请直接通过微信客服或邮箱 ' + adminEmail + ' 联系我们';
                console.error('Contact email send error:', result.error);
            }
        });

        // 支持按 Enter 键提交
        emailInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') btn.click();
        });
    });
})();
