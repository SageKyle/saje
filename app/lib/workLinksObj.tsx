import EcoLogo from '@/app/assets/icons/eco_logo.png'
import GetlinkedLogo from '@/app/assets/icons/getlinked_logo.svg'
import ontracLogo from '@/app/assets/icons/ontrac_logo.png'
import RigLogo from '@/app/assets/icons/rig_logo.png'
import TenbitsLogo from '@/app/assets/icons/tenbits_logo.png'
import { StaticImageData } from 'next/image'

type workItem = {
	name: string
	logo: StaticImageData
	href: string
	link?: string
	flag?: string
}

export const workData: workItem[] = [
	{
		name: 'ECO Africa',
		logo: EcoLogo,
		link: 'fortheecov2.netlify.app/',
		href: '/eco',
	},
	{
		name: 'GetLinked',
		logo: GetlinkedLogo,
		link: 'getlinked-v0.netlify.app/',
		href: 'getlinked',
	},
	{
		name: 'onTrac',
		logo: ontracLogo,
		link: 'ontrac.netlify.app',
		href: '/ontrac',
	},
	{
		name: 'Rig Africa',
		logo: RigLogo,
		link: 'rigafrica-frontend.netlify.app/',
		href: '/rig',
	},
	{
		name: 'TenBits',
		logo: TenbitsLogo,
		link: 'tenbits.vercel.app/',
		href: '/tenbits',
		flag: 'coming soon',
	},
]
