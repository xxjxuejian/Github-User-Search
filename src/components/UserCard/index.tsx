import { SvgIcon } from "../SvgIcon";
import type { GitHubUser } from "../../types/user";
import { use } from "react";
// lg:认为是pc端，md:认为是平板，sm:认为是手机
// transition-colors
interface UserCardProps {
  user: GitHubUser;
}

// 辅助函数：格式化日期
const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  return `Joined ${date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })}`;
};

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  // 链接不可点击时的样式
  const disabledLinkStyle = (text: string | null) => {
    if (!text) {
      return " opacity-50";
    }
    return "";
  };

  return (
    <div className="w-full p-6 transition-colors shadow-lg bg-lm-bg-content dark:bg-dm-bg-content rounded-2xl lg:flex lg:gap-x-8">
      <div className="rounded-full overflow-hidden w-[117px] h-[117px] hidden lg:block shrink-0 ">
        <img src={user.avatar_url} alt={user.name} className="w-full h-full" />
      </div>
      <div>
        {/*  Header Info: */}
        <div className="flex items-center gap-5 mb-6">
          <div className="w-[70px] h-[70px] rounded-full overflow-hidden md:w-[117px] md:h-[117px] lg:hidden">
            <img
              src={user.avatar_url}
              alt={user.name}
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col flex-1 lg:flex-row lg:justify-between ">
            <div>
              {/* 字体大小，颜色、 */}
              <h2 className="text-base font-bold md:text-2xl text-lm-text-alt dark:text-dm-text">
                {user.name || user.login}
              </h2>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="mt-1 text-sm md:text-base text-primary hover:underline"
              >
                @{user.login}
              </a>
            </div>
            <p className="mt-1 text-sm md:text-base text-lm-text dark:text-dm-text">
              {formatDate(user.created_at)}
            </p>
          </div>
        </div>

        {/* --- Bio --- */}
        <div className="mb-6 lg:mb-8">
          <p className="text-sm md:text-base text-lm-text dark:text-dm-text leading-[25px] whitespace-pre-wrap">
            {user.bio || "This profile has no bio"}
          </p>
        </div>

        {/* --- Stats Block --- */}
        <div className="flex items-center justify-between p-4 mb-6 transition-colors rounded-lg md:mb-8 md:px-8 bg-lm-bg dark:bg-dm-bg">
          <div className="flex flex-col items-center text-center ">
            <h4 className="mb-2 text-xs md:text-sm text-lm-text dark:text-dm-text">
              Repos
            </h4>
            <span className="text-base font-bold md:text-xl text-lm-text-alt dark:text-dm-text">
              {user.public_repos}
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <h4 className="mb-2 text-xs md:text-sm text-lm-text dark:text-dm-text">
              Followers
            </h4>
            <span className="text-base font-bold md:text-xl text-lm-text-alt dark:text-dm-text">
              {user.followers}
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <h4 className="mb-2 text-xs md:text-sm text-lm-text dark:text-dm-text">
              Following
            </h4>
            <span className="text-base font-bold md:text-xl text-lm-text-alt dark:text-dm-text">
              {user.following}
            </span>
          </div>
        </div>

        {/* --- Links Footer (Flex Wrap Layout) --- */}
        <div className="flex flex-col text-sm gap-y-4 text-lm-text dark:text-dm-text md:flex-row md:flex-wrap">
          {/* Location */}
          <div
            className={
              "flex items-center gap-4 md:w-1/2" +
              disabledLinkStyle(user.location)
            }
          >
            <SvgIcon name="location" className="w-5 h-5 md:w-6 md:h-6" />
            <span className="truncate">
              {user.location ? user.location : "Not Available"}
            </span>
          </div>
          <div
            className={
              "flex items-center gap-4 md:w-1/2" + disabledLinkStyle(user.blog)
            }
          >
            <SvgIcon name="link" className="w-5 h-5 md:w-6 md:h-6" />
            {user.blog ? (
              <a
                href={user.blog}
                target="_blank"
                rel="noreferrer"
                className="truncate hover:underline"
              >
                {user.blog}
              </a>
            ) : (
              <span>Not Available</span>
            )}
          </div>
          <div
            className={
              "flex items-center gap-4 md:w-1/2" +
              disabledLinkStyle(user.twitter_username)
            }
          >
            <SvgIcon name="twitter" className="w-5 h-5 md:w-6 md:h-6" />
            <span className="truncate">
              {user.twitter_username ? user.twitter_username : "Not Available"}
            </span>
          </div>
          <div
            className={`flex items-center gap-4 md:w-1/2 ${disabledLinkStyle(
              user.company
            )}`}
          >
            <SvgIcon name="building" className="w-5 h-5 md:w-6 md:h-6" />
            <span className="truncate">
              {user.company ? user.company : "Not Available"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
