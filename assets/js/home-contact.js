/**
 * 首页联系我们模块
 * 功能：收集客户邮箱，通过 gmailsend 服务发送通知邮件给站长
 */

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('contact-submit');
    const emailInput = document.getElementById('contact-email');
    const statusEl = document.getElementById('contact-status');

    if (!btn || !emailInput || !statusEl) return;

    btn.addEventListener('click', function() {
        const email = emailInput.value.trim();

        // 简单邮箱格式校验
        if (!email || !email.includes('@') || !email.includes('.')) {
            statusEl.textContent = '请输入有效的邮箱地址';
            statusEl.style.color = '#dc2626';
            return;
        }

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

        fetch('https://gmailsend.404108.xyz/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: adminEmail, subject: subject, body: body })
        })
        .then(function(response) {
            if (!response.ok) throw new Error('Network response was not ok');
            statusEl.textContent = '提交成功，我们会尽快与您联系';
            statusEl.style.color = '#059669';
            emailInput.value = '';
        })
        .catch(function(error) {
            console.error('Contact email send error:', error);
            statusEl.textContent = '提交遇到问题，请直接通过微信客服联系我们';
            statusEl.style.color = '#dc2626';
        });
    });

    // 支持按 Enter 键提交
    emailInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') btn.click();
    });
});
