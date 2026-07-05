# Derek Morin — Portfolio

Plain HTML, CSS, and JavaScript. No build step, no frameworks, no dependencies.
Open `index.html` in a browser and it just works.

---

## Customising your content

### Profile photo
1. Put your photo (e.g. `photo.jpg`) in this folder
2. In `index.html` find `<img src="" alt="" id="avatarImg" />`
3. Change to `<img src="photo.jpg" alt="Derek Morin" id="avatarImg" />`

### 3D renders (Ray Tracer project)
1. Export your GIMP files as `.png`
2. Create a `renders/` folder here and put them in it
3. In `script.js` find the Ray Tracer project entry and update:
   ```js
   images: ["renders/scene1.png", "renders/scene2.png", "renders/scene3.png"]
   ```

### Certifications
Edit the `certs` array near the top of `script.js`:
```js
{ name: "AWS Cloud Practitioner", issuer: "Amazon", date: "2025", badge: "badges/aws.png", url: "https://verify-link" }
```
`badge` and `url` are optional — leave as `""` if you don't have them.

### Projects
Edit the `projects` array in `script.js`. Copy an existing object to add a new one.
Update the `github` URLs to your actual repo links once they're live.

### Skills / Work / Education
These are plain HTML in `index.html` — just find the relevant section and edit the text directly.

---

## Deploying later
Push this folder to a GitHub repo, then connect it to Vercel or Netlify.
Both platforms auto-detect static HTML sites — no configuration needed.

## Files
- `index.html` — all page structure and static content
- `style.css`  — all styling
- `script.js`  — nav toggle, certifications, projects (data-driven), footer year
- `README.md`  — this file
