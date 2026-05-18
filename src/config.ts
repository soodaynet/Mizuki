import type {
	AnnouncementConfig,
	CommentConfig,
	ExpressiveCodeConfig,
	FooterConfig,
	FullscreenWallpaperConfig,
	LicenseConfig,
	MusicPlayerConfig,
	NavBarConfig,
	PermalinkConfig,
	ProfileConfig,
	RandomPostsConfig,
	RelatedPostsConfig,
	SakuraConfig,
	ShareConfig,
	SidebarLayoutConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

// 移除i18n导入以避免循环依赖

// 定义站点语言
const SITE_LANG = "en"; // 语言代码，例如：'en', 'zh_CN', 'ja' 等。
export const siteConfig: SiteConfig = {
	title: "SooDay",
	subtitle: "One demo website",
	siteURL: "https://blog.sooday.dpdns.org/",
	siteStartDate: "2026-05-18",
	lang: "zh_CN",
	themeColor: {
		hue: 240,
		fixed: false
	},
	featurePages: {
		anime: true,
		diary: true,
		friends: true,
		projects: true,
		skills: true,
		timeline: true,
		albums: true,
		devices: true
	},
	navbarTitle: {
		mode: "text-icon",
		text: "SooDayUI",
		icon: "https://cloudflare-imgbed.sooday.dpdns.org/file/%E5%9B%BE%E5%BA%93/%E4%BA%BA%E7%89%A9/biUfLB71.webp",
		logo: "https://cloudflare-imgbed.sooday.dpdns.org/file/%E5%9B%BE%E5%BA%93/%E5%9B%BE%E6%A0%87/ZurCK0zU.webp"
	},
	pageScaling: {
		enable: true,
		targetWidth: 2000
	},
	bangumi: {
		userId: "your-bangumi-id",
		fetchOnDev: false
	},
	bilibili: {
		vmid: "your-bilibili-vmid",
		fetchOnDev: false,
		coverMirror: "",
		useWebp: true
	},
	anime: {
		mode: "local"
	},
	diaryApiUrl: "",
	postListLayout: {
		defaultMode: "list",
		allowSwitch: true,
		categoryBar: {
			enable: true
		}
	},
	tagStyle: {
		useNewStyle: false
	},
	wallpaperMode: {
		defaultMode: "banner",
		showModeSwitchOnMobile: "desktop"
	},
	banner: {
		src: {
			desktop: [
				"/assets/desktop-banner/1.webp",
				"/assets/desktop-banner/2.webp",
				"/assets/desktop-banner/3.webp",
				"/assets/desktop-banner/4.webp"
			],
			mobile: [
				"/assets/mobile-banner/1.webp",
				"/assets/mobile-banner/2.webp",
				"/assets/mobile-banner/3.webp",
				"/assets/mobile-banner/4.webp"
			]
		},
		position: "center",
		carousel: {
			enable: true,
			interval: 3
		},
		waves: {
			enable: true,
			performanceMode: false,
			mobileDisable: false
		},
		imageApi: {
			enable: false,
			url: "http://domain.com/api_v2.php?format=text&count=4"
		},
		homeText: {
			enable: true,
			title: "わたしの部屋",
			subtitle: [
				"特別なことはないけど、君がいると十分です",
				"今でもあなたは私の光",
				"君ってさ、知らないうちに私の毎日になってたよ",
				"君と話すと、なんか毎日がちょっと楽しくなるんだ",
				"今日はなんでもない日。でも、ちょっとだけいい日"
			],
			typewriter: {
				enable: true,
				speed: 100,
				deleteSpeed: 50,
				pauseTime: 2000
			}
		},
		credit: {
			enable: false,
			text: "Describe",
			url: ""
		},
		navbar: {
			transparentMode: "semifull"
		}
	},
	toc: {
		enable: true,
		mobileTop: true,
		desktopSidebar: true,
		floating: true,
		depth: 2,
		useJapaneseBadge: true
	},
	showCoverInContent: true,
	generateOgImages: false,
	favicon: [
		{
			src: "https://cloudflare-imgbed.sooday.dpdns.org/file/%E5%9B%BE%E5%BA%93/%E5%9B%BE%E6%A0%87/ZurCK0zU.webp"
		}
	],
	font: {
		asciiFont: {
			fontFamily: "ZenMaruGothic-Medium",
			fontWeight: "400",
			localFonts: ["ZenMaruGothic-Medium.ttf"],
			enableCompress: true
		},
		cjkFont: {
			fontFamily: "萝莉体 第二版",
			fontWeight: "500",
			localFonts: ["loli.ttf"],
			enableCompress: true
		}
	},
	showLastModified: true,
	pageProgressBar: {
		enable: true,
		height: 3,
		duration: 6000
	},
	thirdPartyAnalytics: {
		enable: false,
		clarityId: ""
	},
	timeZone: -12
};
export const fullscreenWallpaperConfig: FullscreenWallpaperConfig = {
	src: {
		desktop: [
			"/assets/desktop-banner/1.webp",
			"/assets/desktop-banner/2.webp",
			"/assets/desktop-banner/3.webp",
			"/assets/desktop-banner/4.webp"
		],
		mobile: [
			"/assets/mobile-banner/1.webp",
			"/assets/mobile-banner/2.webp",
			"/assets/mobile-banner/3.webp",
			"/assets/mobile-banner/4.webp"
		]
	},
	position: "center",
	carousel: {
		enable: true,
		interval: 5
	},
	zIndex: -1,
	opacity: 0.8,
	blur: 1
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		{
			name: "Links",
			url: "/links/",
			icon: "material-symbols:link",
			children: [
				{
					name: "GitHub",
					url: "https://github.com/LyraVoid/Mizuki",
					external: true,
					icon: "fa7-brands:github"
				},
				{
					name: "Bilibili",
					url: "https://space.bilibili.com/701864046",
					external: true,
					icon: "fa7-brands:bilibili"
				},
				{
					name: "Gitee",
					url: "https://gitee.com/matsuzakayuki/Mizuki",
					external: true,
					icon: "mdi:git"
				}
			]
		},
		{
			name: "My",
			url: "/content/",
			icon: "material-symbols:person",
			children: [
				{
					name: "Anime",
					url: "/anime/",
					icon: "material-symbols:movie"
				},
				{
					name: "Diary",
					url: "/diary/",
					icon: "material-symbols:book"
				},
				{
					name: "Gallery",
					url: "/albums/",
					icon: "material-symbols:photo-library"
				},
				{
					name: "Devices",
					url: "/devices/",
					icon: "material-symbols:devices",
					external: false
				}
			]
		},
		{
			name: "About",
			url: "/content/",
			icon: "material-symbols:info",
			children: [
				{
					name: "About",
					url: "/about/",
					icon: "material-symbols:person"
				},
				{
					name: "Friends",
					url: "/friends/",
					icon: "material-symbols:group"
				}
			]
		},
		{
			name: "Others",
			url: "#",
			icon: "material-symbols:more-horiz",
			children: [
				{
					name: "Projects",
					url: "/projects/",
					icon: "material-symbols:work"
				},
				{
					name: "Skills",
					url: "/skills/",
					icon: "material-symbols:psychology"
				},
				{
					name: "Timeline",
					url: "/timeline/",
					icon: "material-symbols:timeline"
				}
			]
		}
	]
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.webp",
	name: "まつざか ゆき",
	bio: "世界は大きい、君は行かなければならない",
	typewriter: {
		enable: true,
		speed: 80
	},
	links: [
		{
			name: "Bilibili",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/701864046"
		},
		{
			name: "Gitee",
			icon: "mdi:git",
			url: "https://gitee.com/matsuzakayuki"
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/matsuzaka-yuki"
		},
		{
			name: "Codeberg",
			icon: "simple-icons:codeberg",
			url: "https://codeberg.org"
		},
		{
			name: "Discord",
			icon: "fa7-brands:discord",
			url: "https://discord.gg/MqW6TcQtVM"
		}
	]
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
};

// Permalink 固定链接配置
export const permalinkConfig: PermalinkConfig = {
	enable: false, // 是否启用全局 permalink 功能，关闭时使用默认的文件名作为链接
	/**
	 * permalink 格式模板
	 * 支持的占位符：
	 * - %year% : 4位年份 (2024)
	 * - %monthnum% : 2位月份 (01-12)
	 * - %day% : 2位日期 (01-31)
	 * - %hour% : 2位小时 (00-23)
	 * - %minute% : 2位分钟 (00-59)
	 * - %second% : 2位秒数 (00-59)
	 * - %post_id% : 文章序号（按发布时间升序排列，最早的文章为1）
	 * - %postname% : 文章文件名（slug，通常为全小写）
	 * - %raw_postname% : 文章原始文件名（保留大小写）
	 * - %category% : 分类名（无分类时为 "uncategorized"）
	 *
	 * 示例：
	 * - "%year%-%monthnum%-%postname%" => "/2024-12-my-post/"
	 * - "%post_id%-%postname%" => "/42-my-post/"
	 * - "%category%-%postname%" => "/tech-my-post/"
	 * - "%year%/%monthnum%/%day%/%postname%" => "/2024/12/01/my-post/"
	 *
	 * 注意：支持使用斜杠 "/" 构建嵌套路径。
	 */
	format: "%postname%", // 默认使用文件名
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
	hideDuringThemeTransition: true
};

export const commentConfig: CommentConfig = {
	enable: false,
	system: "twikoo",
	twikoo: {
		envId: "https://twikoo.vercel.app",
		lang: SITE_LANG
	},
	giscus: {
		repo: "your-github-username/your-repo-name",
		repoId: "your-repo-id",
		category: "Announcements",
		categoryId: "your-category-id",
		mapping: "pathname",
		strict: "0",
		reactionsEnabled: "1",
		emitMetadata: "0",
		inputPosition: "top",
		theme: "preferred_color_scheme",
		lang: SITE_LANG,
		loading: "lazy"
	}
};

export const shareConfig: ShareConfig = {
	enable: true
};

export const announcementConfig: AnnouncementConfig = {
	title: "",
	content: "ブログへようこそ！これはサンプルの告知です",
	closable: true,
	link: {
		enable: true,
		text: "Learn More",
		url: "/about/",
		external: false
	}
};

export const musicPlayerConfig: MusicPlayerConfig = {
	enable: true,
	showFloatingPlayer: true,
	floatingEntryMode: "fab",
	mode: "local",
	meting_api: "https://meting.mysqil.com/api?server=:server&type=:type&id=:id&auth=:auth&r=:r",
	id: "14164869977",
	server: "netease",
	type: "playlist"
};

export const footerConfig: FooterConfig = {
	enable: false,
	customHtml: ""
};

/**
 * 侧边栏布局配置
 * 用于控制侧边栏组件的显示、排序、动画和响应式行为
 * sidebar: 控制组件所在的侧边栏（left 或 right）。注意：移动端通常不显示右侧栏内容。若组件设置在 right，请确保 layout.position 为 "both"。
 */
export const sidebarLayoutConfig: SidebarLayoutConfig = {
	properties: [
		{
			type: "profile",
			position: "top",
			class: "onload-animation",
			animationDelay: 0
		},
		{
			type: "announcement",
			position: "top",
			class: "onload-animation",
			animationDelay: 50
		},
		{
			type: "music-sidebar",
			position: "sticky",
			class: "onload-animation",
			animationDelay: 100
		},
		{
			type: "categories",
			position: "sticky",
			class: "onload-animation",
			animationDelay: 150,
			responsive: {
				collapseThreshold: 5
			}
		},
		{
			type: "tags",
			position: "top",
			class: "onload-animation",
			animationDelay: 250,
			responsive: {
				collapseThreshold: 20
			}
		},
		{
			type: "card-toc",
			position: "sticky",
			class: "onload-animation",
			animationDelay: 200
		},
		{
			type: "site-stats",
			position: "top",
			class: "onload-animation",
			animationDelay: 200
		},
		{
			type: "calendar",
			position: "top",
			class: "onload-animation",
			animationDelay: 250
		}
	],
	components: {
		left: [
			"profile",
			"announcement",
			"tags",
			"card-toc"
		],
		right: [
			"site-stats",
			"calendar",
			"categories",
			"music-sidebar"
		],
		drawer: [
			"profile",
			"announcement",
			"music-sidebar",
			"categories",
			"tags"
		]
	},
	defaultAnimation: {
		enable: true,
		baseDelay: 0,
		increment: 50
	},
	responsive: {
		breakpoints: {
			mobile: 768,
			tablet: 1280,
			desktop: 1280
		}
	}
};

export const sakuraConfig: SakuraConfig = {
	enable: false,
	sakuraNum: 21,
	limitTimes: -1,
	size: {
		min: 0.5,
		max: 1.1
	},
	opacity: {
		min: 0.3,
		max: 0.9
	},
	speed: {
		horizontal: {
			min: -1.7,
			max: -1.2
		},
		vertical: {
			min: 1.5,
			max: 2.2
		},
		rotation: 0.03,
		fadeSpeed: 0.03
	},
	zIndex: 100
};

// Pio 看板娘配置
export const pioConfig: import("./types/config").PioConfig = {
	enable: false,
	models: ["/pio/models/pio/model.json"],
	position: "left",
	width: 280,
	height: 250,
	mode: "draggable",
	hiddenOnMobile: true,
	dialog: {
		welcome: "Welcome to Mizuki Website!",
		touch: [
			"What are you doing?",
			"Stop touching me!",
			"HENTAI!",
			"Don't bully me like that!"
		],
		home: "Click here to go back to homepage!",
		skin: ["Want to see my new outfit?", "The new outfit looks great~"],
		close: "QWQ See you next time~",
		link: "https://github.com/LyraVoid/Mizuki"
	}
};

// 相关文章配置
export const relatedPostsConfig: RelatedPostsConfig = {
	enable: true,
	maxCount: 5,
};

// 随机文章配置
export const randomPostsConfig: RandomPostsConfig = {
	enable: true,
	maxCount: 5,
};

// 导出所有配置的统一接口
export const widgetConfigs = {
	profile: profileConfig,
	announcement: announcementConfig,
	music: musicPlayerConfig,
	layout: sidebarLayoutConfig,
	sakura: sakuraConfig,
	fullscreenWallpaper: fullscreenWallpaperConfig,
	pio: pioConfig,
	share: shareConfig,
	relatedPosts: relatedPostsConfig,
	randomPosts: randomPostsConfig,
} as const;

// umamiConfig相关配置已移动至astro.config.mjs中,统计脚本请自行在Layout.astro文件的<head>中插入
export const animeConfig: Record<string, unknown> = {
	mode: "local",
	bangumi: {
		userId: ""
	},
	bilibili: {
		vmid: "",
		fetchOnDev: false,
		coverMirror: "",
		useWebp: true
	}
};
export const umamiConfig: UmamiConfig = {
	shareUrl: "",
	scriptUrl: "",
	websiteId: ""
};
export const showLastModified: boolean = true;
