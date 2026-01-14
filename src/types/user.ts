// src/types/user.ts
export interface GitHubUser {
  avatar_url: string; // 头像链接
  name: string; // 用户名
  login: string; // 登录名
  created_at: string; // 创建时间
  bio: string | null; // 个人简介
  public_repos: number; // 公开仓库数
  followers: number; // 粉丝数
  following: number; // 关注数
  location: string | null; // 位置
  blog: string | null; // 个人网站
  twitter_username: string | null; // 推特用户名
  company: string | null; // 公司
  html_url: string; // GitHub 个人主页链接
}

export interface UserError {
  message: string;
}
