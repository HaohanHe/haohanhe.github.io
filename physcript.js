// 心理测试页面交互脚本

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏滚动效果 - 与001a样式保持一致
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // 为所有链接添加平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 测试卡片悬停效果增强
    const testCards = document.querySelectorAll('.test-card');
    
    testCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.01)';
            this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
        });
    });
    
    // 添加页面加载时的渐入效果
    const fadeInElements = document.querySelectorAll('.hero, .test-grid, .other-links');
    
    function checkFade() {
        fadeInElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.85) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // 初始设置
    fadeInElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // 立即检查一次
    checkFade();
    
    // 滚动时检查
    window.addEventListener('scroll', checkFade);
    
    // 添加轻微的背景动画
    function animateBackground() {
        const body = document.body;
        let hue = 0;
        
        setInterval(() => {
            hue = (hue + 0.1) % 360;
            body.style.background = `linear-gradient(135deg, 
                hsl(${hue}, 70%, 60%) 0%, 
                hsl(${(hue + 60) % 360}, 70%, 60%) 100%)`;
        }, 100);
    }
    
    // 可以选择是否启用背景动画
    // animateBackground();
    
    // 模拟页面内容加载完成后的用户反馈
    setTimeout(() => {
        console.log('心理测试页面加载完成，可以开始使用');
    }, 1000);
});

// 添加到主函数之外的辅助函数
function showToast(message, duration = 3000) {
    // 创建一个简单的提示框
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.padding = '12px 24px';
    toast.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    toast.style.color = 'white';
    toast.style.borderRadius = '8px';
    toast.style.zIndex = '10000';
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    
    document.body.appendChild(toast);
    
    // 显示提示框
    setTimeout(() => {
        toast.style.opacity = '1';
    }, 10);
    
    // 隐藏提示框
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, duration);
}

// 预加载一些资源
function preloadResources() {
    // 这里可以添加需要预加载的资源，如图片等
    const resources = [];
    
    resources.forEach(resource => {
        const img = new Image();
        img.src = resource;
    });
}