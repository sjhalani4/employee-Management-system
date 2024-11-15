// Admin data
const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];
  
  // Employee task data
  const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",  // Added password
      "tasks": [
        {
          "taskTitle": "Fix Bugs",
          "taskDescription": "Resolve bugs in the user authentication module.",
          "taskDate": "2024-11-21",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Write Unit Tests",
          "taskDescription": "Write tests for the newly developed API endpoints.",
          "taskDate": "2024-11-23",
          "category": "Testing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Update Documentation",
          "taskDescription": "Update project documentation to reflect the latest changes.",
          "taskDate": "2024-11-25",
          "category": "Documentation",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",  // Added password
      "tasks": [
        {
          "taskTitle": "Marketing Campaign",
          "taskDescription": "Launch the marketing campaign for the new product release.",
          "taskDate": "2024-11-20",
          "category": "Marketing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Customer Feedback Analysis",
          "taskDescription": "Analyze feedback received from customers after the product launch.",
          "taskDate": "2024-11-22",
          "category": "Customer Relations",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "SEO Optimization",
          "taskDescription": "Optimize the website for search engines to improve visibility.",
          "taskDate": "2024-11-24",
          "category": "SEO",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Content Creation",
          "taskDescription": "Create engaging content for the blog and social media platforms.",
          "taskDate": "2024-11-26",
          "category": "Content",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",  // Added password
      "tasks": [
        {
          "taskTitle": "Customer Support",
          "taskDescription": "Provide support for customers facing issues with the product.",
          "taskDate": "2024-11-21",
          "category": "Support",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Product Testing",
          "taskDescription": "Test new product features for bugs and functionality.",
          "taskDate": "2024-11-23",
          "category": "Testing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Sales Report",
          "taskDescription": "Prepare and analyze the monthly sales performance report.",
          "taskDate": "2024-11-25",
          "category": "Sales",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",  // Added password
      "tasks": [
        {
          "taskTitle": "Server Maintenance",
          "taskDescription": "Conduct routine maintenance on servers to ensure uptime.",
          "taskDate": "2024-11-20",
          "category": "IT Operations",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Security Audit",
          "taskDescription": "Perform a security audit on the company's network infrastructure.",
          "taskDate": "2024-11-22",
          "category": "IT Security",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Data Backup",
          "taskDescription": "Ensure all critical data is securely backed up and stored.",
          "taskDate": "2024-11-24",
          "category": "IT Operations",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",  // Added password
      "tasks": [
        {
          "taskTitle": "Fix UI Issues",
          "taskDescription": "Resolve UI inconsistencies and bugs across the app.",
          "taskDate": "2024-11-22",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Team Collaboration",
          "taskDescription": "Collaborate with other teams to streamline workflow.",
          "taskDate": "2024-11-24",
          "category": "Collaboration",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Prepare Client Report",
          "taskDescription": "Prepare a detailed report for the client regarding the project progress.",
          "taskDate": "2024-11-26",
          "category": "Client Interaction",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ]
    }
  ];
  

  export const setLocalStorage = ()=>{
    localStorage.setItem("employees",JSON.stringify(employees));
    localStorage.setItem("admin",JSON.stringify(admin));

  }

  export const getLocalStorage = ()=>{
        const employees =JSON.parse(localStorage.getItem("employees"));
        const admin =JSON.parse(localStorage.getItem("admin"));



        console.log(admin,employees);
  }



//    const employees = [
//       {
//         "id": 1,
//         "email": "employee1@example.com",
//         "password": "123"
//       },
//       {
//         "id": 2,
//         "email": "employee2@example.com",
//         "password": "123"
//       },
//       {
//         "id": 3,
//         "email": "employee3@example.com",
//         "password": "123"
//       },
//       {
//         "id": 4,
//         "email": "employee4@example.com",
//         "password": "123"
//       },
//       {
//         "id": 5,
//         "email": "employee5@example.com",
//         "password": "123"
//       }
//     ];
// const   admin = [
//     {
//         "id": 1,
//         "email": "admin@example.com",
//         "password": "123"
//       }
//   ]
  
  