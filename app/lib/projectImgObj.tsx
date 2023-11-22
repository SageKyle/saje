import { StaticImageData } from 'next/image'

// ontrac project images
import ontracImg2 from '@/app/assets/images/projects-images/ontrac/ontra_notes_and_tasks_screen.png'
import ontracImg4 from '@/app/assets/images/projects-images/ontrac/ontrac_login_screen.png'
import ontracImg3 from '@/app/assets/images/projects-images/ontrac/ontrac_register_screen.png'
import ontracImg1 from '@/app/assets/images/projects-images/ontrac/ontrac_welcome_screen.png'

// eco project images
import ecoAddProject1 from '@/app/assets/images/projects-images/eco/eco_add_project_1.png'
import ecoAddProject2 from '@/app/assets/images/projects-images/eco/eco_add_project_2.png'
import ecoAddProject3 from '@/app/assets/images/projects-images/eco/eco_add_project_3.png'
import ecoInnovation1 from '@/app/assets/images/projects-images/eco/eco_innovation_1.png'
import ecoInnovation2 from '@/app/assets/images/projects-images/eco/eco_innovation_2.png'
import ecoProblems from '@/app/assets/images/projects-images/eco/eco_problems_page.png'
import ecoProfile from '@/app/assets/images/projects-images/eco/eco_profile_page.png'
import ecoProject from '@/app/assets/images/projects-images/eco/eco_project_details_page.png'

// getlinked project images
import getlinkedFaq from '@/app/assets/images/projects-images//getlinked/getlinked_faq_section.png'
import getlinkedHero from '@/app/assets/images/projects-images/getlinked/getlinked_hero_section.png'
import getlinkedCriteria from '@/app/assets/images/projects-images/getlinked/getlinked_intro_section.png'
import getlinkedPartner from '@/app/assets/images/projects-images/getlinked/getlinked_partners_section.png'
import getlinkedRegister from '@/app/assets/images/projects-images/getlinked/getlinked_registration.png'
import getlinkedSuccess from '@/app/assets/images/projects-images/getlinked/getlinked_success_modal.png'

// tenbits project images
import tenbitsHome from '@/app/assets/images/projects-images/tenbits/tenbits_coming-soon_page.png'
import tenbitsWaitlist from '@/app/assets/images/projects-images/tenbits/tenbits_waitlist_form.png'

// rig project images
import rigAbout from '@/app/assets/images/projects-images/rig/rig_about.png'
import rigContact from '@/app/assets/images/projects-images/rig/rig_contact-us.png'
import rigDashboard from '@/app/assets/images/projects-images/rig/rig_dashboard.png'
import rigEvents from '@/app/assets/images/projects-images/rig/rig_events.png'
import rigHome from '@/app/assets/images/projects-images/rig/rig_home.png'
import rigModal from '@/app/assets/images/projects-images/rig/rig_modal.png'
import rigProfile from '@/app/assets/images/projects-images/rig/rig_profile.png'
import rigStore from '@/app/assets/images/projects-images/rig/rig_store.png'

export type projectImage = {
	src: StaticImageData
	alt: string
}

export const ontracImages: projectImage[] = [
	{ src: ontracImg1, alt: 'ontrac welcome page' },
	{ src: ontracImg2, alt: 'ontac notes and tasks homepage' },
	{ src: ontracImg3, alt: 'ontrac registration page' },
	{ src: ontracImg4, alt: 'ontrac login page' },
]

export const ecoImages: projectImage[] = [
	{ src: ecoProfile, alt: 'eco profile page developed by paul saje' },
	{ src: ecoProject, alt: 'eco project details page developed by paul saje' },
	{ src: ecoProblems, alt: 'eco problems page developed by paul saje' },
	{ src: ecoInnovation1, alt: 'eco innovation page developed by paul saje' },
	{ src: ecoInnovation2, alt: 'eco innovation page developed by paul saje' },
	{ src: ecoAddProject1, alt: 'eco add-project page developed by paul saje' },
	{ src: ecoAddProject2, alt: 'eco add-project page developed by paul saje' },
	{ src: ecoAddProject3, alt: 'eco add-project page developed by paul saje' },
]

export const getlinkedImages: projectImage[] = [
	{
		src: getlinkedHero,
		alt: 'hero section of getlinked pre-hackathon webpage',
	},
	{
		src: getlinkedCriteria,
		alt: 'criteria for qualifying for getlinked hackathon',
	},
	{
		src: getlinkedFaq,
		alt: 'getlinked pre-hackathon frequently asked questions section',
	},
	{ src: getlinkedPartner, alt: 'getlinked partners section' },
	{ src: getlinkedRegister, alt: 'getlinked registration page' },
	{ src: getlinkedSuccess, alt: 'getlinked successful form submit modal' },
]

export const tenbitsImages: projectImage[] = [
	{ src: tenbitsHome, alt: 'screenshot of tenbits coming-soon page' },
	{ src: tenbitsWaitlist, alt: 'registration form to join tenbits waitlist' },
]

export const rigImages: projectImage[] = [
	{ src: rigHome, alt: 'homepage of rig africa project' },
	{ src: rigAbout, alt: 'about us page of rig africa project' },
	{ src: rigContact, alt: 'contact us page' },
	{ src: rigEvents, alt: 'rig upcoming events page' },
	{ src: rigStore, alt: 'rig store page' },
	{ src: rigModal, alt: 'rig donation modal' },
	{ src: rigDashboard, alt: 'rig partners dashbaord' },
	{ src: rigProfile, alt: 'rig partners profile' },
]
