// Theme Toggle - Updated Version
const themeToggle = document.getElementById('themeToggle');

// Check for saved theme preference or use preferred color scheme
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme') || 
                     (prefersDarkScheme.matches ? 'dark' : 'light');

// Apply the current theme
if (currentTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    themeToggle.checked = true;
}

// Theme toggle event listener
themeToggle.addEventListener('change', function() {
    if (this.checked) {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    }
});
    // Mobile Menu
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
    
    // Modal functionality
    const modalTriggers = document.querySelectorAll('.open-modal');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-modal');
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            document.getElementById(modalId).classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Subscribe button
    const subscribeBtn = document.getElementById('subscribeBtn');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', function() {
            document.getElementById('subscribeModal').classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Tab functionality for resources section
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Filter functionality for videos
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            filterVideos(filterValue);
        });
    });
    
    // Sample data for videos
    const videos = [
    // ... keep existing videos if any ...
    {
        id: 1, // or next available number
        title: 'Your Video Master Machine Learning with Google’s Free Course Notes |  for Tech Enthusiasts & Beginner | Part-1 Here',  // Replace with actual title
        category: 'tutorial', // Choose: tutorial/review/educational
        thumbnail: 'https://img.youtube.com/vi/jIlrFxEZKlg/maxresdefault.jpg',
        youtubeId: 'jIlrFxEZKlg',
        views: '125K', // Update with actual views if known
        date: '2 weeks ago' // Update with actual upload 
    },
        {
              id: 2,
        title: 'AI & Machine Learning Explained Like Never Before! 🤖🚀 Future Tech 2025', // Change this
        
        category: 'educational', // Choose: tutorial/review/educational
        thumbnail: 'https://img.youtube.com/vi/dFAe8BpcnHw/maxresdefault.jpg',
        youtubeId: 'dFAe8BpcnHw',
        views: '75K', // Update with actual views
        date: '1 week ago' // Update with actual upload time
        },
        {
        id: 3,
        title: 'Your Third Video Title', // Change this
        description: 'Description of third video', // Change this
        category: 'review', // tutorial/review/educational
        thumbnail: 'https://img.youtube.com/vi/_Zw5fuYvoCQ/maxresdefault.jpg',
        youtubeId: '_Zw5fuYvoCQ',
        views: '50K', // Update with actual views
        date: '3 days ago' // Update with upload time
    },
    // Fourth video
    {
        id: 4,
        title: 'Your Fourth Video Title',
        description: 'Description of fourth video',
        category: 'tutorial',
        thumbnail: 'https://img.youtube.com/vi/XvFuJm8NzsM/maxresdefault.jpg',
        youtubeId: 'XvFuJm8NzsM',
        views: '90K',
        date: '2 weeks ago'
    },
    // Fifth video
    {
        id: 5,
        title: 'Your Fifth Video Title',
        description: 'Description of fifth video',
        category: 'educational',
        thumbnail: 'https://img.youtube.com/vi/tG8Rl6gnBAI/maxresdefault.jpg',
        youtubeId: 'tG8Rl6gnBAI',
        views: '110K',
        date: '3 weeks ago'
    }
];

    // Sample data for notes
    const notes = [
        {
            id: 1,
            title: 'HTML5 Cheat Sheet',
            subject: 'Web Development',
            content: 'Comprehensive reference for all HTML5 tags, attributes, and best practices. Includes semantic elements, forms, and multimedia tags.',
            date: 'May 15, 2023',
            file: 'html5-cheat-sheet.pdf'
        },
        {
            id: 2,
            title: 'CSS Flexbox Guide',
            subject: 'CSS',
            content: 'Complete guide to CSS Flexbox layout with visual examples and common use cases. Covers all properties for both flex containers and items.',
            date: 'June 2, 2023',
            file: 'flexbox-guide.pdf'
        },
        {
            id: 3,
            title: 'JavaScript ES6 Features',
            subject: 'JavaScript',
            content: 'Summary of the most important ES6 features including arrow functions, template literals, destructuring, spread operator, and more.',
            date: 'April 28, 2023',
            file: 'es6-features.pdf'
        },
        {
            id: 4,
            title: 'Git Commands Reference',
            subject: 'Version Control',
            content: 'Essential Git commands for daily use, branching strategies, and collaboration workflows. Includes common scenarios and solutions.',
            date: 'May 20, 2023',
            file: 'git-commands.pdf'
        },
        {
            id: 5,
            title: 'Responsive Design Principles',
            subject: 'Web Design',
            content: 'Key principles for creating responsive websites that work on all devices. Covers media queries, fluid layouts, and mobile-first approach.',
            date: 'June 10, 2023',
            file: 'responsive-design.pdf'
        },
        {
            id: 6,
            title: 'React Component Lifecycle',
            subject: 'React',
            content: 'Diagram and explanation of React component lifecycle methods for class components and their equivalents in functional components with hooks.',
            date: 'June 5, 2023',
            file: 'react-lifecycle.pdf'
        }
    ];
    
    // Sample data for resources
    const resources = {
        downloads: [
            {
                id: 1,
                title: 'Web Developer Toolkit',
                description: 'Collection of essential tools and software for web developers',
                url: '#',
                type: 'download'
            },
            {
                id: 2,
                title: 'Color Palette Generator',
                description: 'Tool to create harmonious color schemes for your projects',
                url: '#',
                type: 'download'
            },
            {
                id: 3,
                title: 'UI Design Templates',
                description: 'Free templates for common UI components and layouts',
                url: '#',
                type: 'download'
            }
        ],
        links: [
            {
                id: 1,
                title: 'MDN Web Docs',
                description: 'Comprehensive resource for web development documentation',
                url: 'https://developer.mozilla.org',
                type: 'link'
            },
            {
                id: 2,
                title: 'CSS Tricks',
                description: 'Excellent blog with CSS tips, tricks, and techniques',
                url: 'https://css-tricks.com',
                type: 'link'
            },
            {
                id: 3,
                title: 'Stack Overflow',
                description: 'Q&A platform for programmers to ask and answer questions',
                url: 'https://stackoverflow.com',
                type: 'link'
            }
        ],
        tools: [
            {
                id: 1,
                title: 'CodePen',
                description: 'Online code editor for front-end development',
                url: 'https://codepen.io',
                type: 'tool'
            },
            {
                id: 2,
                title: 'GitHub',
                description: 'Platform for version control and collaboration',
                url: 'https://github.com',
                type: 'tool'
            },
            {
                id: 3,
                title: 'Can I Use',
                description: 'Browser compatibility tables for web technologies',
                url: 'https://caniuse.com',
                type: 'tool'
            }
        ]
    };
    
    // Load videos
  function loadVideos(filter = 'all') {
    const videosGrid = document.querySelector('.videos-grid');
    videosGrid.innerHTML = '';
    
    const filteredVideos = filter === 'all' ? videos : videos.filter(video => video.category === filter);
    
    filteredVideos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.innerHTML = `
            <a href="https://youtu.be/${video.youtubeId}" target="_blank" class="video-link">
                <div class="video-thumbnail">
                    <img src="${video.thumbnail}" alt="${video.title}">
                    <div class="play-icon">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
                <div class="video-info">
                    <h3 class="video-title">${video.title}</h3>
                    <p class="video-description">${video.description}</p>
                    <div class="video-meta">
                        <span>${video.views} views</span>
                        <span>${video.date}</span>
                    </div>
                </div>
            </a>
        `;
        videosGrid.appendChild(videoCard);
    });
}
    
    
    // Filter videos
    function filterVideos(filter) {
        loadVideos(filter);
    }
    
    // Load notes
    function loadNotes() {
        const notesGrid = document.querySelector('.notes-grid');
        notesGrid.innerHTML = '';
        
        notes.forEach(note => {
            const noteCard = document.createElement('div');
            noteCard.className = 'note-card';
            noteCard.innerHTML = `
                <div class="note-header">
                    <h3 class="note-title">${note.title}</h3>
                    <p class="note-subject">${note.subject}</p>
                </div>
                <div class="note-content">
                    ${note.content}
                </div>
                <div class="note-footer">
                    <span class="note-date">${note.date}</span>
                    ${note.file ? `<a href="#" class="note-download">Download <i class="fas fa-download"></i></a>` : ''}
                </div>
            `;
            notesGrid.appendChild(noteCard);
        });
    }
    
    // Load resources
    function loadResources() {
        const downloadsGrid = document.getElementById('downloads').querySelector('.resources-grid');
        const linksGrid = document.getElementById('links').querySelector('.resources-grid');
        const toolsGrid = document.getElementById('tools').querySelector('.resources-grid');
        
        downloadsGrid.innerHTML = '';
        linksGrid.innerHTML = '';
        toolsGrid.innerHTML = '';
        
        resources.downloads.forEach(resource => {
            downloadsGrid.appendChild(createResourceCard(resource));
        });
        
        resources.links.forEach(resource => {
            linksGrid.appendChild(createResourceCard(resource));
        });
        
        resources.tools.forEach(resource => {
            toolsGrid.appendChild(createResourceCard(resource));
        });
    }
    
    // Create resource card
    function createResourceCard(resource) {
        const resourceCard = document.createElement('div');
        resourceCard.className = 'resource-card';
        resourceCard.innerHTML = `
            <span class="resource-type">${resource.type}</span>
            <h3 class="resource-title">${resource.title}</h3>
            <p class="resource-description">${resource.description}</p>
            <a href="${resource.url}" class="resource-link" target="_blank">View Resource <i class="fas fa-external-link-alt"></i></a>
        `;
        return resourceCard;
    }
    
    // Form submissions
    document.getElementById('videoForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Video submitted successfully!');
        this.reset();
        document.querySelector('.modal.active').classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    document.getElementById('notesForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Notes submitted successfully!');
        this.reset();
        document.querySelector('.modal.active').classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    document.getElementById('resourcesForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Resource submitted successfully!');
        this.reset();
        document.querySelector('.modal.active').classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    document.getElementById('subscribeForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thanks for subscribing!');
        this.reset();
        document.querySelector('.modal.active').classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    document.getElementById('newsletterForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thanks for subscribing to our newsletter!');
        this.reset();
    });
    
    // Load more buttons
    document.getElementById('loadMoreVideos')?.addEventListener('click', function() {
        // In a real app, this would load more videos from an API
        alert('Loading more videos...');
    });
    
    document.getElementById('loadMoreNotes')?.addEventListener('click', function() {
        // In a real app, this would load more notes from an API
        alert('Loading more notes...');
    });
    
    // Initialize content
    loadVideos();
    loadNotes();
    loadResources();
    
    // Smooth scrolling for anchor links
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