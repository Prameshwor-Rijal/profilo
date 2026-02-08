import { useNavigate } from "react-router-dom"


export const MOCK_USER = {
    username: 'admin',
    password: 'admin123',
    authToken: 'mock-user-token-123456'
}

let profileData = {
    personalInfo: {
        name: 'Santosh Ghimire',
        title: 'Sr. Software Engineer',
        email: 'santoshghi650@gmail.com',
        phone: '+977 9843529908',
        location: 'Bhaktapur, Nepal',
        bio: 'Passionate developer with 5+ years of experience building scalable web applications. Love coding, teaching, and contributing to open source projects.',
        // profilePicture: 'https://images.unsplash.com/photo-1695927621677-ec96e048dce2?h=400&w=400&fit=crop'
        profilePicture: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop'
    },
    education: [
        {
            id: 1,
            degree: 'Bachelor of Science in Computer Science',
            institution: 'Tribhuvan University, Nepal',
            year: '2016 - 2020',
            description: 'Graduated with honors, securing lead position. Focused on software engineering and web development.'
        },
        {
            id: 2,
            degree: 'Master of Science in Software Engineering',
            institution: 'Stanford University',
            year: '2020 - 2023',
            description: 'Specialized in distributed systems and cloud computing.'
        }
    ],
    workExperience: [
        {
            id: 1,
            company: 'Tech Corp Inc.',
            position: 'Senior Full Stack Developer',
            duration: '2020 - 2025',
            description: 'Leading development of microservices architecture. Mentoring junior developers and implementing best practices.',
            location: 'Kathmandu, Nepal'
        },
        {
            id: 2,
            company: 'Google',
            position: 'Full Stack Developer',
            duration: '2025 - present',
            description: 'Built and maintained React-based frontend applications. Developed RESTful APIs using Spring Boot.',
            location: 'Kathmandu, Nepal'
        }
    ],
    projects: [
        {
            id: 1,
            name: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
            technologies: ['React', 'Spring', 'PSQL', 'Stripe API'],
            link: 'https://github.com/example/ecommerce',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop'
        },
        {
            id: 2,
            name: 'Task Management App',
            description: 'Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
            technologies: ['Thymeleaf', 'SpringBoot', 'Material-Mysql'],
            link: 'https://github.com/example/taskmanager',
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop'
        },
        {
            id: 3,
            name: 'Weather Dashboard',
            description: 'Real-time weather dashboard with location-based forecasts, interactive maps, and weather alerts.',
            technologies: ['React', 'OpenWeatherMap API', 'Chart.js'],
            link: 'https://github.com/example/weather',
            image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop'
        }
    ],

    hobbies: [
        {
            id: 1,
            name: 'Photography',
            description: 'Passionate about landscape and street photography. Love capturing moments and telling stories through images.',
            icon: '📷'
        },
        {
            id: 2,
            name: 'Reading',
            description: 'Avid reader of technology books, science fiction, and biographies. Always learning something new.',
            icon: '📚'
        },
        {
            id: 3,
            name: 'Hiking',
            description: 'Enjoy exploring nature trails and mountains. Great way to stay active and clear the mind.',
            icon: '⛰️'
        },
        {
            id: 4,
            name: 'Open Source',
            description: 'Contributing to open source projects and building tools that help the developer community.',
            icon: '💻'
        }
    ]
}

export const mockAPI = {

    logout(){
        localStorage.clear()
    },

    isValidToken(){
        const token  = localStorage.getItem('authToken')
        return MOCK_USER.authToken === token;
    },

    login(username, password){
        if(MOCK_USER.username===username && MOCK_USER.password===password){
            localStorage.setItem('authToken', MOCK_USER.authToken);
            return {success: true, token: MOCK_USER.authToken, user:{username}}
        }
        throw new Error("Invalid Credentials.");
    },

    getProfile() {
        return { ...profileData };
    }
}