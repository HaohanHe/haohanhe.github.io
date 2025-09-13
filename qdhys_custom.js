// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 水波纹效果实现
    function createRippleEffect() {
        const rippleContainers = document.querySelectorAll('.ripple-container');
        
        rippleContainers.forEach(container => {
            container.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.classList.add('ripple');
                ripple.style.width = ripple.style.height = `${size}px`;
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }
    
    // 导航栏滚动效果
    function setupNavbarScroll() {
        window.onscroll = function() {
            scrollFunction();
        };
        
        function scrollFunction() {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }
        }
    }
    
    // 轮播图功能
    function setupSlideshow() {
        const slides = document.querySelectorAll('.slide');
        let currentSlide = 0;
        
        if (slides.length > 0) {
            function showSlide(slideIndex) {
                slides.forEach((slide) => {
                    slide.classList.remove('active');
                });
                slides[slideIndex].classList.add('active');
            }
            
            function nextSlide() {
                currentSlide++;
                if (currentSlide >= slides.length) {
                    currentSlide = 0;
                }
                showSlide(currentSlide);
            }
            
            function startSlideshow() {
                setInterval(nextSlide, 3000); // 每隔3秒切换一次轮播图
            }
            
            // 初始化第一个轮播图为活动状态
            if (slides.length > 0) {
                slides[0].classList.add('active');
            }
            
            startSlideshow();
        }
    }
    
    // 移动端菜单交互
    function setupMobileMenu() {
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.classList.add('mobile-menu-btn');
        mobileMenuBtn.innerHTML = '☰';
        document.body.appendChild(mobileMenuBtn);
        
        // 创建移动端菜单
        const mobileMenu = document.createElement('div');
        mobileMenu.classList.add('mobile-menu');
        
        // 添加关闭按钮
        const closeBtn = document.createElement('button');
        closeBtn.classList.add('close-menu-btn');
        closeBtn.innerHTML = '×';
        mobileMenu.appendChild(closeBtn);
        
        // 复制导航链接
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            const menuClone = navbar.querySelector('ul').cloneNode(true);
            mobileMenu.appendChild(menuClone);
        }
        
        document.body.appendChild(mobileMenu);
        
        // 绑定事件
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
        
        closeBtn.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
        
        // 点击菜单外区域关闭菜单
        document.addEventListener('click', function(e) {
            if (!mobileMenu.contains(e.target) && e.target !== mobileMenuBtn) {
                mobileMenu.classList.remove('active');
            }
        });
        
        // 点击菜单链接关闭菜单
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
            });
        });
    }
    
    // 平滑滚动效果
    function setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // 卡片悬停动画
    function setupCardHoverEffects() {
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
                this.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            });
        });
    }
    
    // 页面载入渐入动画
    function setupPageLoadAnimation() {
        const fadeElements = document.querySelectorAll('.fade-in, .card');
        
        // 初始设置
        fadeElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        });
        
        // 检查元素是否在视口中
        function checkVisibility() {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementBottom = element.getBoundingClientRect().bottom;
                const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);
                
                if (isVisible) {
                    element.classList.add('loaded');
                }
            });
        }
        
        // 初始检查
        setTimeout(checkVisibility, 100);
        
        // 滚动时检查
        window.addEventListener('scroll', checkVisibility);
    }
    
    // 初始化所有功能
    createRippleEffect();
    setupNavbarScroll();
    setupSlideshow();
    setupMobileMenu();
    setupSmoothScroll();
    setupCardHoverEffects();
    setupPageLoadAnimation();
    
    // 响应式窗口调整
    window.addEventListener('resize', function() {
        // 根据窗口大小调整样式或行为
    });
});