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
