import lang from './lang.json';

export default {
	en: {
		404: {
			404: '404',
			pageNotFound: 'Page not found.'
		},
		about: {
			header: 'About',
			p1: '<strong>CoinOS</strong> is an <strong>open source</strong> bitcoin web wallet, point of sale, ecommerce marketplace and exchange platform. Development started in Vancouver in September 2012 as a way to provide local merchants with a convenient way to accept bitcoin payments.',
			p2: 'The feature set has grown over the years to accomodate a wide variety of use cases with the goal of making it as easy as possible for anyone to get started using bitcoin quickly, cheaply, and securely.',
			p3: "Anyone can download the source code and host their own instance of the platform backed by their own bitcoin, liquid or lightning nodes, or reach out and we'll gladly set this up for you.",
			p4: 'Intra-account transfers between custodial wallets of different users on our server are completely free, instant, and unlimited.',
			founder: {
				header: 'The Founder',
				name: 'Adam Soltys',
				position: 'Chief Technical Officer',
				qualifications: [
					'Running bitcoin since 2011',
					'20+ years web development experience in government and industry',
					'Early bitcoin Vancouver meetup organizer',
					'Founder of The bitcoin Co-op and early supporter of Decentral Vancouver',
					'Yogi, permaculturist, anarchist, decentralist',
					'Husband, father, brother, son'
				]
			}
		},
		error: {
			header: 'Error',
			message: 'Please try again or contact support.',
			signIn: 'Please sign in to continue.'
		},
		faq: {
			header: 'FAQ',
			cost: {
				question: 'What does it cost?',
				answer:
					'CoinOS is free to use. You only pay a 1% fee if/when you withdraw your funds. Compare this to 3% typically charged by a credit card processor.'
			},
			compatibility: {
				question: 'Do I need any special device or software?',
				answer:
					'No. CoinOS is web-based, so as long as you have an internet connection, you can use it on any device or hardware. Most merchants might use it on a phone or a tablet.'
			},
			safety: {
				question: 'Are my funds safe?',
				answer:
					'Your funds are stored on our secure server, however we recommend that you withdraw them to your own cold storage for long-term savings.'
			}
		},
		footer: {
			followUs: 'Follow Us',
			twitter: 'Twitter',
			github: 'GitHub',
			company: 'Company',
			telegram: 'Telegram',
			support: 'Support',
			jobs: 'Jobs'
		},
		howItWorks: {
			header: 'How It Works',
			step1: {
				header: '1. Create your account',
				description: 'A username & password is all you need to get started.'
			},
			step2: {
				header: '2. Ask for payments',
				description: 'The same as you normally would, but with bitcoin.'
			},
			step3: {
				header: "3. That's all!",
				description: 'You can convert to local currency at any point.'
			}
		},
		invoice: {
			addTip: 'Add a tip',
			addTipq: 'Add a tip?',
			done: 'Done',
			paymentSuccessful: 'Payment Successful!'
		},
		jobs: {
			header: 'Jobs',
			subheader: 'Current Openings',
			pitch1:
				'CoinOS is actively looking for developers to join our growing team (full-time or part-time, remote working OK).',
			pitch2:
				'Excited about working on open source bitcoin? Then take a look at our repositories on',
			github: 'GitHub',
			pitch3:
				"If you think you can make an impact, we'd love to hear from you. Send us your resume to"
		},
		landing: {
			header_before_icon: 'The',
			header_with_icon: 'easiest',
			header_after_icon: 'way to accept bitcoin in your store.',
			subheader:
				'Grow your customer base and revenue by accepting bitcoin with an easy-to-use and managed Point of Sale. No software or hardware required.',
			info1: {
				title: 'Instant payments via Lightning',
				description:
					'The moment your customer sends a payment, it’s there. No waiting for bank settlements or worrying about chargebacks. Instant settlement, in seconds. Say goodbye to 3% credit card processing fees.'
			},
			info2: {
				title: 'Simple to use, custodial by default',
				description1: 'Just enter an amount, share QR code and you’re done.',
				description2:
					'CoinOS is custodial by default, which eliminates the need to understand how bitcoin/lightning works. We do all the heavy lifting so you can focus on your business.',
				description3:
					'You always have the option of <span class="underline underline-offset-4">taking custody</span> of your own keys.'
			},
			info3: {
				title: 'Brand it your way!',
				description:
					'Customize your point of sale look and feel, or keep it on default - totally up to you.'
			}
		},
		login: {
			username: 'Username',
			password: 'Password',
			passwordRecommendation:
				'We recommend a long, random password generated with a password manager.',
			forgotPassword: 'Forgot Password?',
			haveAccount: 'Already have an account?',
			noAccount: "Don't have an account?",
			register: 'Register',
			signIn: 'Sign In',
			failed: 'Login failed'
		},
		nav: {
			startInSeconds: 'Start in Seconds',
			account: 'Account',
			signIn: 'Sign In',
			signOut: 'Sign Out',
			dashboard: 'Dashboard',
			settings: 'Settings',
			support: 'Support'
		},
		user: {
			addressGoesHere: 'Address goes here',
			follow: 'Follow',
			remove: 'Remove',
			scanToPayBTC: 'Scan to pay with bitcoin',
			dashboard: {
				ACCOUNT_BALANCE: 'ACCOUNT BALANCE',
				bitcoinPrice: 'Bitcoin Price:',
				conversionFeeWarning:
					'You will be charged a 1% conversion fee if you withdraw more of a certain type of Bitcoin than you deposit.',
				dataFromBinance: 'Data from <span class="text-black">Binance</span>.',
				fetchingRate: 'fetching rate...',
				optionalNote: 'Note (Optional)',
				send: 'Send',
				withdraw: 'Withdraw'
			},
			receive: {
				lessThan1BTCWarning: 'Please enter an amount less than 1 bitcoin.',
				showQR: 'Show QR'
			},
			settings: {
				header: 'Settings',
				ACCOUNT: 'ACCOUNT',
				POINT_OF_SALE: 'POINT OF SALE',
				SECURITY: 'SECURITY',
				locale: 'Language',
				username: 'Username',
				newPassword: 'New Password',
				businessAddress: 'Business Address',
				emailNotifications: 'Email Notifications',
				emailNotificationsDescription:
					'Get notified via email when a change occurs on your account or when people send you payments.',
				smsNotifications: 'SMS Notifications',
				smsNotificationsDescription:
					'CoinOS will send you text notifications when this is enabled.',
				theme: 'Color Theme',
				themeDescription: 'Select from the default color themes.',
				localCurrency: 'Local Currency',
				btcUnit: 'Display bitcoin in:',
				bitcoin: 'Bitcoin',
				satoshis: 'Satoshis',
				securityPIN: 'Security PIN',
				securityPINDescription:
					'Set a security pin that will be used to unlock your settings and to send outgoing payments.',
				setPIN: 'Set PIN',
				autoLock: 'Auto-Lock Timer',
				autoLockDescription:
					'Your account will go into a secure mode automatically after a specified time:',
				twofa: '2-Factor Authentication',
				twofaDescription:
					'Add an extra level of security to your device by enableing 2-factor authentication.',
				twofaSetup: 'Set up 2FA'
			},
			support: {
				header: 'Support',
				email: 'Email',
				accountName: 'Account Name',
				message: 'Message',
				send: 'Send'
			},
			transactions: {
				header: 'Transaction History',
				AMOUNT: 'AMOUNT',
				TYPE: 'TYPE',
				TIME: 'TIME',
				sent: 'Sent',
				received: 'Received',
				empty: 'No transactions yet.'
			}
		}
	},
	fr: {
		about: {
			header: 'À Propos'
		},
		faq: {
			header: 'FAQ'
		},
		howItWorks: {
			header: 'Comment Elle Fonctionne'
		},
		nav: {
			startInSeconds: 'Commence en Secondes',
			signIn: 'Connexion'
		}
	}
};