# Personal Website

## Overview

This is a personal website built using React.js and hosted on a linux-based server configured by myself. The site showcases my skills, interests, and resume as a Computer Science and Cybersecurity student.

### About this site

- **Responsive design**: I chose to use React.js for its responsiveness that is optimized for desktop and mobile devices. React is one of my top langugaes for building web applications.
- **Site Deployment**: I chose to go a step further by configuring and deploying this site myself. Nginx provides fast and reliable delivery of static files all while being hosted on a lightweight Raspberry Pi. This approach gave me hands on experience with server security, including configuring firewalls and using HTTPS for secure connections.

## Installation & Setup

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- Linux based server

### Installation

1. Clone the repository: 
   ```
   git clone https://github.com/brs6412/personal-site.git
   cd personal-site
   ```
2. Install dependencies: `npm install`
3. Build the React app: `npm run build`
4. Transfer the build files to your server: `scp -r build/* username@yourserverIP:/file/location/`

### Running the server

1. **Create a configuration file for your site**: `sudo nano /etc/nginx/sites-available/mywebsite`
2. **Enable your configuration**
3. **Start the nginx server**: `sudo systemctl start nginx`
4. **Access the site**: Open a browser and navigate to `http://your_domain_or_ip`
