# DOXINOVA Website - Installation & Setup Guide

## 📋 Table of Contents
1. [Quick Start](#quick-start)
2. [Local Development](#local-development)
3. [Deployment Options](#deployment-options)
4. [Troubleshooting](#troubleshooting)
5. [Customization](#customization)

---

## 🚀 Quick Start

### Option 1: Direct Opening (No Setup Required!)
Simply open the `index.html` file in your web browser:
- Double-click `index.html`
- Or right-click and select "Open with" → Your browser

✅ **That's it!** Website works immediately.

---

## 💻 Local Development

### Option 2: Using Python (Recommended)

#### Python 3.x
```bash
# Navigate to project directory
cd path/to/Doxinova

# Start local server
python -m http.server 8000

# Open in browser
# http://localhost:8000
```

#### Python 2.x
```bash
cd path/to/Doxinova
python -m SimpleHTTPServer 8000
```

### Option 3: Using Node.js

#### If Node.js is installed:
```bash
# Install http-server globally (one time)
npm install -g http-server

# Navigate to project directory
cd path/to/Doxinova

# Start server
http-server

# Server runs on http://localhost:8080
```

### Option 4: Using Live Server in VS Code

1. Install "Live Server" extension
   - Open VS Code Extensions
   - Search "Live Server"
   - Click Install

2. Right-click `index.html` → "Open with Live Server"
3. Browser opens automatically with live reload

### Option 5: Using Other Tools

**Ruby:**
```bash
ruby -run -ehttpd . -p8000
```

**PHP (if installed):**
```bash
php -S localhost:8000
```

---

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free & Easy)

1. **Create GitHub Account** (if you don't have one)
   - Visit https://github.com

2. **Create New Repository**
   - Name: `Doxinova` or `username.github.io`
   - Make it public

3. **Push Code to GitHub**
   ```bash
   cd path/to/Doxinova
   git init
   git add .
   git commit -m "Initial DOXINOVA website"
   git branch -M main
   git remote add origin https://github.com/username/Doxinova.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "GitHub Pages" section
   - Select `main` branch as source
   - Save

5. **Your site is live at:**
   - `https://username.github.io/Doxinova/`
   - (or `https://username.github.io` if repo is named `username.github.io`)

### Option 2: Netlify (Free & Easy)

1. **Connect GitHub**
   - Visit https://netlify.com
   - Click "New site from Git"
   - Connect your GitHub account
   - Select Doxinova repository

2. **Configure Build Settings**
   - Build command: (leave empty)
   - Publish directory: `.` or `/`
   - Click Deploy

3. **Your site is live at:**
   - `https://your-site-name.netlify.app`

### Option 3: Vercel (Free & Fast)

1. **Deploy with Vercel**
   - Visit https://vercel.com
   - Import repository
   - Click Deploy

2. **Custom Domain**
   - In Vercel dashboard
   - Add your domain
   - Follow DNS instructions

### Option 4: Traditional Web Hosting

1. **Get Web Hosting** (GoDaddy, Hostinger, Bluehost, etc.)

2. **Get FTP Credentials** from hosting provider

3. **Upload via FTP** using:
   - FileZilla (Free)
   - WinSCP (Free)
   - Hosting panel's file manager

4. **Upload all files:**
   - index.html
   - styles.css
   - script.js
   - config.js
   - manifest.json
   - .gitignore (optional)
   - assets/ folder
   - All other files

### Option 5: cPanel (if provided by hosting)

1. **Login to cPanel**
2. **File Manager** → Go to `public_html`
3. **Upload Files** via "Upload" button
4. **Set index.html as default**
5. Done!

---

## 🔧 Customization

### Edit Team Information

In `index.html`:
```html
<!-- Find and update -->
<h4>Team Member Name</h4>
<p class="member-role">Role</p>
<p class="member-desc">Description</p>
```

Or edit `config.js`:
```javascript
team: {
  members: [
    {
      name: 'Your Name',
      nim: '12345678',
      expertise: ['Skill 1', 'Skill 2']
    }
  ]
}
```

### Change Contact Email

In `script.js`, find:
```javascript
const mailtoLink = `mailto:doxinova@palangkaraya.ac.id?...`
```

Change to your email address.

### Update Colors

In `styles.css`:
```css
:root {
    --butter: #E8D5B7;
    --cherry: #8B3A3A;
    --olive: #6B8E23;
    --oat: #C5B8A8;
}
```

### Add New Section

1. **Add HTML** in `index.html`:
```html
<section id="new-section" class="new-section">
  <div class="section-container">
    <h2 class="section-title">New Section</h2>
    <!-- Your content -->
  </div>
</section>
```

2. **Add CSS** in `styles.css`:
```css
.new-section {
    background: linear-gradient(135deg, var(--butter), var(--oat));
    padding: var(--spacing-2xl) 0;
}
```

3. **Update Navigation** in `index.html`:
```html
<li><a href="#new-section" class="nav-link">New Section</a></li>
```

---

## 🐛 Troubleshooting

### Issue: Page Doesn't Load

**Solution:**
- Make sure all files are in the same directory
- Check file names match exactly (case-sensitive)
- Try using a local server instead of direct opening

### Issue: Styles Not Loading

**Solution:**
```bash
# Hard refresh (clear cache)
Ctrl + Shift + R  (Windows/Linux)
Cmd + Shift + R   (Mac)
```

### Issue: Navigation Not Working

**Solution:**
- Check that sections have correct `id` attributes
- Verify links point to correct `#id`
- Check JavaScript console for errors (F12)

### Issue: Contact Form Not Working

**Solution:**
- Ensure `mailto` link is working
- Check email address in `script.js`
- Try different email client if default not set

### Issue: Mobile Menu Not Appearing

**Solution:**
- Check viewport meta tag is present
- Clear browser cache
- Try different mobile device/size

### Issue: SVG Images Not Showing

**Solution:**
- Check viewBox dimensions are correct
- Verify SVG code has no syntax errors
- Try using browser DevTools (F12) to inspect

---

## 🎯 Performance Optimization

### 1. Image Optimization
```bash
# If adding images, optimize before uploading
# Use online tools or ImageMagick
```

### 2. Enable Caching Headers (Server Configuration)

For `.htaccess` (Apache servers):
```
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/html "access plus 1 day"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
</IfModule>
```

### 3. Minify CSS/JS (Optional)

Use online tools:
- CSS: https://www.minifier.org/
- JS: https://javascript-minifier.com/

### 4. Enable GZIP Compression

Ask your hosting provider to enable GZIP.

---

## 📱 Testing

### Test on Different Devices

1. **Desktop** - Chrome, Firefox, Safari, Edge
2. **Tablet** - iPad, Android tablet
3. **Mobile** - iPhone, Android phone

### Browser DevTools (F12)

- **Responsive Design Mode:** Ctrl + Shift + M
- **Console:** See any errors
- **Network:** Check load times
- **Performance:** Analyze speed

### Mobile Testing Tools

- Google Chrome DevTools (built-in)
- Firefox Developer Tools
- BrowserStack (paid)
- Responsively App (free, downloadable)

---

## 🔒 Security

### Best Practices

1. **Keep Files Updated**
   - Update form handling regularly
   - Review code for vulnerabilities

2. **Use HTTPS** (when deploying)
   - GitHub Pages: Automatic
   - Netlify: Automatic
   - Traditional hosting: Get SSL certificate

3. **Protect Sensitive Info**
   - Don't put passwords in code
   - Use environment variables
   - Keep `.env` files in `.gitignore`

4. **Validate User Input**
   - Form validation already implemented
   - Check for XSS vulnerabilities

---

## 📊 Analytics Setup (Optional)

### Add Google Analytics

1. Create Google Analytics account
2. Get Tracking ID
3. Add to HTML before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_TRACKING_ID');
</script>
```

---

## 🚨 Maintenance Checklist

- [ ] Update team member information
- [ ] Check all links work
- [ ] Test contact form
- [ ] Verify responsive design
- [ ] Check browser compatibility
- [ ] Update content regularly
- [ ] Monitor analytics
- [ ] Backup website files
- [ ] Update dependencies (if using any)
- [ ] Test on mobile devices

---

## 📞 Support & Help

### Common Resources

- **HTML Questions:** https://developer.mozilla.org/
- **CSS Help:** https://css-tricks.com/
- **JavaScript:** https://javascript.info/
- **GitHub Pages:** https://pages.github.com/
- **Netlify Help:** https://docs.netlify.com/

### Getting Help

1. Check README.md
2. Review troubleshooting section
3. Check browser console for errors
4. Inspect HTML/CSS with DevTools
5. Contact: doxinova@palangkaraya.ac.id

---

## 🎉 Success!

Your DOXINOVA website is now:
- ✅ Created locally
- ✅ Fully functional
- ✅ Ready for deployment
- ✅ Mobile responsive
- ✅ Professional looking

### Next Steps:

1. Customize with your content
2. Test thoroughly
3. Deploy to hosting
4. Share with team
5. Promote research

---

## 📚 Additional Resources

### Website Tools

- **Favicon Generator:** https://favicon.io/
- **Color Palette:** https://colorhexa.com/
- **Typography:** https://fonts.google.com/
- **Icons:** https://fontawesome.com/
- **Illustrations:** https://undraw.co/

### Hosting Comparison

| Platform | Cost | Ease | Domain | Speed |
|----------|------|------|--------|-------|
| GitHub Pages | Free | Easy | subdomain | Good |
| Netlify | Free | Easy | subdomain | Great |
| Vercel | Free | Easy | subdomain | Excellent |
| Traditional | ~$5-20/mo | Medium | Included | Good |

---

## Version History

### v1.0 (Initial Release)
- Complete website setup
- Deployment guides
- Customization instructions
- Troubleshooting tips

---

*Last Updated: 2024*

**Happy Hosting! 🚀**

Untuk informasi lebih lanjut, hubungi: doxinova@palangkaraya.ac.id
