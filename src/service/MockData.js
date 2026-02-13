

let profileData = {
    personalInfo: {
        name: 'Prameshwor Rijal',
        title: 'Springboot Training',
        email: 'pr@gmail.com',
        phone: '+977 949468366',
        location: 'Kathmandu, Nepal',
        bio: 'Currently a BCA student.',
        profilePicture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcFmknoAE_Uy8-Qi3r5HkJmpqlD_dkSx9Gayq-a5b_-lQv-JpzJWlbv-U&s'
    },
    education: [
        {
            id: 1,
            degree: 'Bachelor in Computer Application',
            institution: 'Tribhuvan University, Nepal',
            year: '2022 - 2027',
            description: 'Pending.'
        },
        // {
        //     id: 2,
        //     degree: 'Master of Science in Software Engineering',
        //     institution: 'Stanford University',
        //     year: '2020 - 2023',
        //     description: 'Specialized in distributed systems and cloud computing.'
        // }
    ],
    workExperience: [
        // {
        //     id: 1,
        //     company: 'Tech Corp Inc.',
        //     position: 'Senior Full Stack Developer',
        //     duration: '2020 - 2025',
        //     description: 'Leading development of microservices architecture. Mentoring junior developers and implementing best practices.',
        //     location: 'Kathmandu, Nepal'
        // },
        // {
        //     id: 2,
        //     company: 'Google',
        //     position: 'Full Stack Developer',
        //     duration: '2025 - present',
        //     description: 'Built and maintained React-based frontend applications. Developed RESTful APIs using Spring Boot.',
        //     location: 'Kathmandu, Nepal'
        // }
    ],
    projects: [
        {
            id: 1,
            name: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
            technologies: ['HTML', 'CSS', 'MongoDB', 'Stripe API'],
            link: 'https://github.com/example/ecommerce',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop'
        },
        // {
        //     id: 2,
        //     name: 'Task Management App',
        //     description: 'Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
        //     technologies: ['Thymeleaf', 'SpringBoot', 'Material-Mysql'],
        //     link: 'https://github.com/example/taskmanager',
        //     image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop'
        // },
        // {
        //     id: 3,
        //     name: 'Weather Dashboard',
        //     description: 'Real-time weather dashboard with location-based forecasts, interactive maps, and weather alerts.',
        //     technologies: ['React', 'OpenWeatherMap API', 'Chart.js'],
        //     link: 'https://github.com/example/weather',
        //     image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop'
        // }
    ],

    hobbies: [
        {
            id: 1,
            name: 'Gaming',
            description: '',
            icon: '📷'
        },
        // {
        //     id: 2,
        //     name: 'Reading',
        //     description: 'Avid reader of technology books, science fiction, and biographies. Always learning something new.',
        //     icon: '📚'
        // },
        // {
        //     id: 3,
        //     name: 'Hiking',
        //     description: 'Enjoy exploring nature trails and mountains. Great way to stay active and clear the mind.',
        //     icon: '⛰️'
        // },
        // {
        //     id: 4,
        //     name: 'Open Source',
        //     description: 'Contributing to open source projects and building tools that help the developer community.',
        //     icon: '💻'
        // }
    ]
}

export const mockAPI = {
    getProfile() {
        return { ...profileData };
    }
}