# Finance Dashboard System

A full-stack finance dashboard application built with Laravel (backend) and React + Vite (frontend).

## Overview

- **Backend:** Laravel 12, Sanctum authentication, role-based access control, API endpoints for financial record management, categories, dashboard data, and user management.
- **Frontend:** React, Vite, React Router, protected routes, role-based UI access, login/register flow, dashboard pages for records, categories, and user management.
- **Database:** Laravel migrations, seeders, soft deletes, foreign key constraints.

## Key Features

- User authentication with **Laravel Sanctum**
- Role-based permissions: **admin**, **analyst**, and viewer access
- CRUD operations for financial records
- Category listing for analytics
- Admin user management interfaces
- Separate backend API and frontend dashboard application

## Project Structure

- `/backend` — Laravel application
  - `app/Http/Controllers/Api` — API controllers
  - `app/Models` — Eloquent models
  - `routes/api.php` — API route definitions
  - `database/migrations` — database schema
  - `database/seeders` — default data seeders

- `/frontend` — React application
  - `src/App.jsx` — main route definitions
  - `src/main.jsx` — React app bootstrapping
  - `src/components/auth` — authentication and access control
  - `src/components/pages` — dashboard pages for records, categories, and users

## Backend API Routes

Public routes:

- `POST /api/register` — user registration
- `POST /api/login` — user login

Authenticated routes:

- `GET /api/dashboard` — dashboard data for signed-in users

Analyst + admin:

- `GET /api/financial-records`
- `GET /api/financial-records/{id}`
- `GET /api/categories`

Admin only:

- `POST /api/financial-records`
- `PUT /api/financial-records/{id}`
- `DELETE /api/financial-records/{id}`
- `GET /api/user-management`
- `GET /api/user-management/{id}`
- `PUT /api/user-management/{id}`
- `DELETE /api/user-management/{id}`

Common authenticated route:

- `GET /api/user` — returns current authenticated user

## Frontend Pages and Access

Public pages:

- `/` — home
- `/login` — login page
- `/register` — registration page
- `/unauthorized` — access denied

Protected dashboard pages:

- `/dashboard` — main dashboard
- `/dashboard/category` — category page (admin, analyst)
- `/dashboard/financial-records` — financial records list (admin, analyst)
- `/dashboard/financial-records/create` — create record (admin)
- `/dashboard/financial-records/update/:id` — edit record (admin)
- `/dashboard/financial-records/view/:id` — view record (admin, analyst)
- `/dashboard/user-management` — user management list (admin)
- `/dashboard/user-management/update/:id` — edit user (admin)
- `/dashboard/user-management/view/:id` — view user details (admin)

## Setup Instructions

### Backend

1. Open a terminal in `/backend`
2. Install PHP dependencies:
   ```bash
   composer install
   ```
3. Copy environment example and configure database:
   ```bash
   cp .env.example .env
   ```
4. Generate application key:
   ```bash
   php artisan key:generate
   ```
5. Run migrations and seeders:
   ```bash
   php artisan migrate
   php artisan db:seed
   ```
6. Start the backend server:
   ```bash
   php artisan serve
   ```

### Frontend

1. Open a terminal in `/frontend`
2. Install JavaScript dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

## Notes

- The app uses **auth context** in the frontend to protect pages and check user roles.
- The backend uses **role-based middleware** so API access is restricted correctly.
- The backend is configured with Laravel Sanctum for secure API authentication.

## Recommended Workflow

1. Start backend server
2. Start frontend server
3. Register or log in via the frontend
4. Access dashboard pages based on role permissions

## Useful Commands

Backend:

- `php artisan migrate`
- `php artisan db:seed`
- `php artisan serve`
- `php artisan test`

Frontend:

- `npm run dev`
- `npm run build`
- `npm run lint`

---

For more details on the Laravel backend or Vite frontend, refer to the files under `/backend` and `/frontend` respectively.
