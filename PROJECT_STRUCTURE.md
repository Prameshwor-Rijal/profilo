# Project Structure Guide

This document explains the modular architecture of the Profilo application.

## 📂 Directory Structure

```
profilo/
│
├── public/                          # Static files
│   ├── index.html
│   └── ...
│
├── src/
│   │
│   ├── components/                  # Reusable UI Components
│   │   ├── common/                 # Shared components
│   │   │   ├── Button.js           # Button component with variants
│   │   │   ├── Button.css
│   │   │   ├── Input.js            # Input/Textarea component
│   │   │   ├── Input.css
│   │   │   ├── Card.js             # Card container component
│   │   │   ├── Card.css
│   │   │   ├── Modal.js            # Modal dialog component
│   │   │   └── Modal.css
│   │   │
│   │   └── routing/                # Routing components
│   │       └── ProtectedRoute.js   # Route protection wrapper
│   │
│   ├── context/                     # React Context Providers
│   │   └── AuthContext.js          # Authentication state management
│   │
│   ├── pages/                       # Main Application Pages
│   │   ├── Login.js                # Login page
│   │   ├── Login.css
│   │   ├── Profile.js              # Public profile page
│   │   ├── Profile.css
│   │   ├── Dashboard.js            # Admin dashboard with CRUD
│   │   └── Dashboard.css
│   │
│   ├── services/                    # API & Data Services
│   │   └── mockData.js             # Mock API with JSON data
│   │
│   ├── utils/                       # Utility Functions
│   │   └── constants.js            # App constants & configuration
│   │
│   ├── App.js                       # Main app component (routing)
│   ├── App.css                      # Global app styles
│   ├── index.js                     # Application entry point
│   └── index.css                    # Global styles
│
└── package.json                     # Dependencies & scripts
```

## 🏗️ Architecture Layers

### 1. **Presentation Layer** (`components/` & `pages/`)
- **Common Components**: Reusable UI building blocks
- **Pages**: Full page components that compose smaller components
- **Routing**: Navigation and route protection

### 2. **State Management Layer** (`context/`)
- **AuthContext**: Manages authentication state globally
- Uses React Context API for shared state
- Provides hooks for easy access (`useAuth`)

### 3. **Data Layer** (`services/`)
- **Mock API**: Simulates backend API calls
- Centralized data operations
- Easy to replace with real API calls

### 4. **Configuration Layer** (`utils/`)
- **Constants**: Centralized configuration
- Reusable across the application
- Easy to maintain and update

## 🔄 Data Flow

```
User Action
    ↓
Component Event Handler
    ↓
Service Layer (mockData.js)
    ↓
Update State (Context or Local)
    ↓
Re-render UI
```Profile

## 📦 Component Hierarchy

```
App
├── Router
    ├── Routes
        ├── Profile (Public)
        │   └── Uses: Card components
        │
        ├── Login (Public)
        │   └── Uses: Card, Input, Button
        │
        └── Dashboard (Protected)
            └── Uses: Card, Button, Modal, Input
                └── CRUD Operations
```

## 🎯 Key Design Patterns

### 1. **Component Composition**
- Small, focused components
- Composed to build complex UIs
- Reusable across the application

### 2. **Separation of Concerns**
- UI components separate from business logic
- Data operations in service layer
- State management in context

### 3. **Single Responsibility**
- Each component has one clear purpose
- Functions do one thing well
- Easy to test and maintain

### 4. **DRY (Don't Repeat Yourself)**
- Reusable components
- Shared utilities
- Centralized constants

## 🔐 Authentication Flow

```
1. User enters credentials
2. Login component calls AuthContext.login()
3. AuthContext calls mockAPI.login()
4. On success, token stored in localStorage
5. isAuthenticated state updated
6. ProtectedRoute checks auth status
7. User redirected to dashboard
```

## 📝 CRUD Operations Flow

```
Dashboard Component
    ↓
User clicks Add/Edit
    ↓
Modal opens with form
    ↓
User fills form and submits
    ↓
Calls mockAPI (add/update/delete)
    ↓
Data updated in mockData
    ↓
Dashboard reloads data
    ↓
UI updates with new data
```

## 🎨 Styling Approach

- **Component-scoped CSS**: Each component has its own CSS file
- **CSS Classes**: Semantic class names
- **Responsive Design**: Mobile-first approach
- **Modern CSS**: Flexbox, Grid, Animations

## 🚀 Best Practices Implemented

1. ✅ **Modular File Structure**
2. ✅ **Component Reusability**
3. ✅ **Separation of Concerns**
4. ✅ **Error Handling**
5. ✅ **Loading States**
6. ✅ **Form Validation**
7. ✅ **Responsive Design**
8. ✅ **Code Comments**
9. ✅ **Consistent Naming**
10. ✅ **Type Safety (via PropTypes or TypeScript ready)**

## 🔄 Converting to Production

### Replace Mock API:
1. Update `services/mockData.js` → `services/api.js`
2. Replace mock functions with real HTTP calls
3. Add proper error handling
4. Implement token refresh

### Add Environment Variables:
```env
REACT_APP_API_URL=http://your-api.com
REACT_APP_ENV=production
```

### Add State Management (Optional):
- Redux for complex state
- React Query for server state
- Zustand for lightweight state

## 📚 Learning Path

1. **Start with Components**: Understand Button, Input, Card
2. **Move to Pages**: See how components compose
3. **Study Context**: Learn state management
4. **Explore Services**: Understand data layer
5. **Review Routing**: Learn navigation patterns

---

This structure is designed to be:
- **Easy to understand** for beginners
- **Scalable** for growth
- **Maintainable** for long-term development
- **Educational** for learning React best practices
