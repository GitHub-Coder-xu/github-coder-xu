#!/bin/bash
# 部署个人主页到 GitHub Pages

REPO_NAME="xiaoyan-portfolio"
USERNAME="GitHub-Coder-xu"
EMAIL="your-email@example.com"

# 1. 进入输出目录
cd ~/.openclaw/workspace/skills/personal-homepage/output

# 2. 初始化 git（如果还没有）
if [ ! -d ".git" ]; then
  git init
  git config user.name "$USERNAME"
  git config user.email "$EMAIL"
fi

# 3. 添加所有文件
git add .

# 4. 提交
git commit -m "feat: 添加个人主页"

# 5. 创建远程仓库（如果不存在）
echo "请手动创建仓库: https://github.com/new"
echo "仓库名: $REPO_NAME"
echo "设为 Public"
echo ""
echo "创建好后，运行以下命令："
echo ""
echo "  git remote add origin https://github.com/$USERNAME/$REPO_NAME.git"
echo "  git push -u origin main"
echo ""
echo "然后在 GitHub 仓库 Settings → Pages 开启 GitHub Pages"
echo "选择 main 分支，Save"
echo ""
echo "访问: https://$USERNAME.github.io/$REPO_NAME"
