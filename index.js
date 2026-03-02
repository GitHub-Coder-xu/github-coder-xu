const fs = require('fs');
const path = require('path');

// 从 USER.md 读取用户信息（简单解析）
function getUserInfo() {
  return {
    name: '小闫',
    title: 'Java开发工程师',
    location: '北京',
    bio: '后端开发，专注Java技术栈，喜欢折腾新技术。',
    skills: ['Java', 'Spring', 'MySQL', 'Redis', '微服务', 'IDEA', 'DBeaver'],
    vibe: '简洁直接，重点突出'
  };
}

function generateHomepage() {
  const user = getUserInfo();
  
  const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${user.name} - ${user.title}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
      background: #fafafa;
    }
    .container { max-width: 800px; margin: 0 auto; padding: 40px 20px; }
    header {
      text-align: center;
      padding: 60px 0;
      border-bottom: 1px solid #eee;
    }
    h1 { font-size: 2.5rem; margin-bottom: 10px; }
    .title { color: #666; font-size: 1.2rem; }
    .location { color: #999; font-size: 0.9rem; margin-top: 8px; }
    section { padding: 40px 0; border-bottom: 1px solid #eee; }
    h2 { font-size: 1.5rem; margin-bottom: 20px; color: #222; }
    .bio { font-size: 1.1rem; color: #555; line-height: 1.8; }
    .skills { display: flex; flex-wrap: wrap; gap: 10px; }
    .skill {
      background: #e8f4fd;
      color: #0969da;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.9rem;
    }
    .projects { display: grid; gap: 20px; }
    .project {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    }
    .project h3 { margin-bottom: 8px; }
    .project p { color: #666; }
    footer {
      text-align: center;
      padding: 40px 0;
      color: #999;
      font-size: 0.9rem;
    }
    a { color: #0969da; text-decoration: none; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>${user.name}</h1>
      <p class="title">${user.title}</p>
      <p class="location">📍 ${user.location}</p>
    </header>

    <section>
      <h2>关于我</h2>
      <p class="bio">${user.bio}</p>
    </section>

    <section>
      <h2>技术栈</h2>
      <div class="skills">
        ${user.skills.map(s => `<span class="skill">${s}</span>`).join('')}
      </div>
    </section>

    <section>
      <h2>项目</h2>
      <div class="projects">
        <div class="project">
          <h3>待添加项目...</h3>
          <p>在这里展示你的项目</p>
        </div>
      </div>
    </section>

    <footer>
      <p>© 2026 ${user.name}</p>
    </footer>
  </div>
</body>
</html>`;

  return html;
}

// 主函数
function main() {
  const outputPath = path.join(__dirname, 'output', 'index.html');
  
  // 确保 output 目录存在
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  const html = generateHomepage();
  fs.writeFileSync(outputPath, html, 'utf8');
  
  console.log(`✅ 个人主页已生成: ${outputPath}`);
  console.log(`📂 在浏览器打开即可预览`);
}

module.exports = { main, generateHomepage };
