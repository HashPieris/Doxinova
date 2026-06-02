# DOXINOVA Development Guide

## 👨‍💻 For Developers

### Project Structure

```
Doxinova/
├── index.html              # Main landing page (Semantic HTML5)
├── styles.css              # Complete responsive styling
├── script.js               # Interactive features & utilities
├── config.js               # Configuration & constants
├── manifest.json           # PWA manifest
├── README.md               # Project documentation
├── INSTALLATION.md         # Setup & deployment guide
├── DEVELOPMENT.md          # This file
├── .gitignore              # Git ignore file
│
├── assets/
│   ├── images/             # Images & photos
│   │   ├── moni.jpg       # Mascot image (existing)
│   │   ├── logo.svg       # Logo (optional)
│   │   ├── icon-192.png   # PWA icon (recommended)
│   │   ├── icon-512.png   # PWA icon (recommended)
│   │   └── og-image.png   # Open Graph image
│   │
│   ├── vectors/            # SVG illustrations
│   │   ├── hero.svg       # Hero section illustration
│   │   ├── molecule.svg   # Molecule structures
│   │   └── dna.svg        # DNA helixes
│   │
│   └── documents/          # Research papers, PDFs
│       ├── research.pdf
│       └── proposal.pdf
```

---

## 🛠️ Development Workflow

### 1. Local Development Setup

```bash
# Clone or navigate to project
cd path/to/Doxinova

# Start local server
python -m http.server 8000

# Open browser
# http://localhost:8000
```

### 2. Making Changes

1. **Edit files** in your editor
2. **Save changes**
3. **Refresh browser** (F5 or Ctrl+R)
4. **Test thoroughly**

### 3. Code Standards

#### HTML
- Use semantic HTML5 elements
- Include proper meta tags
- Maintain accessibility attributes
- Use proper heading hierarchy
- Add alt text to images

#### CSS
- Use CSS variables for consistency
- Follow mobile-first approach
- Use BEM naming convention where applicable
- Group related styles
- Add comments for complex sections

#### JavaScript
- Use vanilla JS (no dependencies)
- Keep functions small and focused
- Add JSDoc comments
- Handle errors gracefully
- Avoid global variables

---

## 📝 Code Examples

### Adding New Section

**HTML (index.html):**
```html
<section id="new-section" class="new-section">
    <div class="section-container">
        <h2 class="section-title">New Section Title</h2>
        <p>Content goes here</p>
    </div>
</section>
```

**CSS (styles.css):**
```css
.new-section {
    background: linear-gradient(135deg, var(--butter), var(--oat));
    padding: var(--spacing-2xl) 0;
}

.new-section h2 {
    color: var(--cherry-dark);
}
```

**Navigation (index.html):**
```html
<li><a href="#new-section" class="nav-link">New Section</a></li>
```

### Adding New Team Member

**Option 1: Direct HTML Edit**
```html
<div class="team-card">
    <div class="member-avatar">
        <!-- SVG avatar or image -->
    </div>
    <div class="member-info">
        <h4>Team Member Name</h4>
        <p class="member-role">Role</p>
        <div class="member-expertise">
            <span class="expertise-tag">Skill 1</span>
            <span class="expertise-tag">Skill 2</span>
        </div>
    </div>
</div>
```

**Option 2: Update config.js**
```javascript
team: {
    members: [
        {
            id: 5,
            name: 'New Member Name',
            nim: '2530408010040',
            role: 'Anggota Tim',
            expertise: ['Skill 1', 'Skill 2']
        }
    ]
}
```

---

## 🎨 Styling Guide

### Color Variables
```css
/* Primary Colors */
--butter: #E8D5B7          /* Light warm background */
--cherry: #8B3A3A          /* Deep red accent */
--cherry-dark: #C41E3A     /* Bright red for CTAs */

/* Secondary Colors */
--olive: #6B8E23           /* Green accent */
--oat: #C5B8A8             /* Warm neutral */

/* Utilities */
--dark: #3D3D3D            /* Dark text */
--light: #FAFAFA           /* Light background */
```

### Spacing System
```css
--spacing-xs: 0.5rem       /* 8px */
--spacing-sm: 1rem         /* 16px */
--spacing-md: 1.5rem       /* 24px */
--spacing-lg: 2rem         /* 32px */
--spacing-xl: 3rem         /* 48px */
--spacing-2xl: 4rem        /* 64px */
```

### Typography
```css
/* Display Font - Headers */
font-family: 'Georgia', 'Garamond', serif;

/* Body Font - Text */
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

---

## ⚡ Performance Tips

### 1. Image Optimization
```bash
# Use tools to compress images
# - TinyPNG: https://tinypng.com/
# - ImageOptim: https://imageoptim.com/
# - Squoosh: https://squoosh.app/
```

### 2. CSS Optimization
```css
/* Remove unused styles */
/* Combine similar rules */
/* Use shorthand properties */
```

### 3. JavaScript Performance
```javascript
/* Debounce heavy operations */
/* Lazy load images */
/* Cache DOM queries */
```

---

## 🧪 Testing Checklist

### Functional Testing
- [ ] All links navigate correctly
- [ ] Contact form submits
- [ ] Mobile menu opens/closes
- [ ] Animations play smoothly
- [ ] Forms validate input

### Responsive Testing
- [ ] Desktop (1920px+)
- [ ] Laptop (1200px)
- [ ] Tablet (768px)
- [ ] Mobile (375px)
- [ ] Small mobile (320px)

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers

### Accessibility Testing
- [ ] Keyboard navigation works
- [ ] Screen readers compatible
- [ ] Sufficient color contrast
- [ ] Images have alt text
- [ ] Form labels present

### Performance Testing
- [ ] Page loads in < 3s
- [ ] No console errors
- [ ] Smooth 60fps animations
- [ ] Mobile performance good
- [ ] Lighthouse score > 90

---

## 🐛 Debugging

### Browser DevTools (F12)

**Elements Tab:**
- Inspect HTML structure
- Check CSS styles
- View computed styles

**Console Tab:**
- See JavaScript errors
- Run console commands
- Check for warnings

**Network Tab:**
- Check file load times
- Identify failed requests
- Monitor bandwidth

**Performance Tab:**
- Record page load
- Analyze bottlenecks
- Check frame rate

### Common Issues

**Styles not applying:**
```javascript
// Check CSS file is linked
// Hard refresh cache (Ctrl+Shift+R)
// Check CSS selector specificity
// Verify no typos in class/id names
```

**JavaScript not working:**
```javascript
// Open console (F12) - check for errors
// Verify script is loaded
// Check script runs after DOM ready
// Use console.log() to debug
```

**Images not showing:**
```javascript
// Check file path is correct
// Verify image file exists
// Check file permissions
// Use browser DevTools to verify
```

---

## 🚀 Deployment Checklist

Before deploying:
- [ ] All links tested
- [ ] No broken images
- [ ] No console errors
- [ ] Form handling works
- [ ] Mobile responsive verified
- [ ] Lighthouse score good
- [ ] Contact email updated
- [ ] All content proofread
- [ ] Analytics added (optional)
- [ ] Backup created

---

## 📚 Learning Resources

### Web Development
- **MDN Web Docs:** https://developer.mozilla.org/
- **W3Schools:** https://www.w3schools.com/
- **CSS-Tricks:** https://css-tricks.com/
- **JavaScript.info:** https://javascript.info/

### Tools & Utilities
- **VS Code:** https://code.visualstudio.com/
- **GitHub:** https://github.com/
- **Chrome DevTools:** Built-in (F12)
- **CodePen:** https://codepen.io/

### Design & UX
- **Figma:** https://www.figma.com/
- **Adobe Color:** https://color.adobe.com/
- **Font Awesome:** https://fontawesome.com/
- **Unsplash:** https://unsplash.com/

---

## 🔄 Version Control (Git)

### Basic Commands

```bash
# Initialize repository
git init

# Check status
git status

# Stage changes
git add .

# Commit changes
git commit -m "Your message here"

# View history
git log

# Push to remote
git push origin main

# Pull updates
git pull origin main

# Create branch
git checkout -b feature-name

# Switch branch
git checkout main

# Merge branch
git merge feature-name
```

### Git Workflow

1. **Create branch** for new feature
2. **Make changes** and test
3. **Commit changes** with descriptive message
4. **Push to GitHub**
5. **Create Pull Request**
6. **Review and merge**

---

## 📊 Code Quality

### Best Practices

1. **DRY (Don't Repeat Yourself)**
   - Reuse code
   - Create functions
   - Use CSS variables

2. **KISS (Keep It Simple)**
   - Simple code is better
   - Avoid unnecessary complexity
   - Clear naming

3. **Maintainability**
   - Add comments
   - Consistent formatting
   - Logical organization

4. **Performance**
   - Optimize images
   - Minimize requests
   - Cache resources

---

## 🎯 Future Enhancements

### Suggested Features

- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Blog/News section
- [ ] Image gallery
- [ ] Video tutorials
- [ ] PDF downloads
- [ ] Search functionality
- [ ] Team member bios
- [ ] Research paper database
- [ ] Social media integration

### Technical Improvements

- [ ] Add backend (Node.js/Python)
- [ ] Database integration
- [ ] User authentication
- [ ] Comments system
- [ ] Email notifications
- [ ] API endpoints
- [ ] Admin panel
- [ ] CMS integration

---

## 👥 Contributing

### How to Contribute

1. **Fork repository**
2. **Create feature branch**
3. **Make improvements**
4. **Test thoroughly**
5. **Commit with clear messages**
6. **Push changes**
7. **Submit Pull Request**
8. **Wait for review**

### Code Review Process

- Changes reviewed
- Feedback provided
- Revisions requested if needed
- Final approval
- Merge to main

---

## 📞 Support & Collaboration

### Team Communication
- Slack: [Your Slack Channel]
- Email: doxinova@palangkaraya.ac.id
- GitHub Issues: Reporting bugs
- GitHub Discussions: Feature ideas

### Meeting Schedule
- Weekly standup: [Day/Time]
- Sprint planning: [Day/Time]
- Code review: [Day/Time]

---

## 📋 Documentation

### Files to Keep Updated
- README.md - Project overview
- INSTALLATION.md - Setup guide
- DEVELOPMENT.md - This file
- config.js - Configuration

### Documentation Standards
- Clear and concise
- Code examples included
- Screenshots when helpful
- Updated regularly

---

## ✅ Quality Checklist

### Code Quality
- [ ] Follows coding standards
- [ ] No code duplication
- [ ] Proper error handling
- [ ] Well commented
- [ ] Clean commits

### Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing done
- [ ] Cross-browser tested
- [ ] Mobile tested

### Documentation
- [ ] Code commented
- [ ] README updated
- [ ] API documented
- [ ] Installation guide clear
- [ ] Examples provided

---

*Last Updated: 2024*

**Happy Coding! 💻**
