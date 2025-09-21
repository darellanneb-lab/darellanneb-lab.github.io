<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Darell Anne V. Bersamira - Portfolio</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #333;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        h1 {
            color: #2c3e50;
            text-align: center;
            border-bottom: 3px solid #3498db;
            padding-bottom: 10px;
        }
        h2 {
            color: #34495e;
            border-left: 4px solid #3498db;
            padding-left: 15px;
        }
        h3 {
            color: #2980b9;
        }
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .skill-category {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #3498db;
        }
        .project {
            background: #e8f5e8;
            padding: 15px;
            margin: 10px 0;
            border-radius: 8px;
            border-left: 4px solid #27ae60;
        }
        .contact-links {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            justify-content: center;
            margin: 20px 0;
        }
        .contact-links a {
            background: #3498db;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 25px;
            transition: background 0.3s;
        }
        .contact-links a:hover {
            background: #2980b9;
        }
        .goals {
            background: #fff3cd;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #ffc107;
        }
        .goals ul {
            list-style-type: none;
            padding: 0;
        }
        .goals li {
            padding: 5px 0;
            position: relative;
            padding-left: 25px;
        }
        .goals li:before {
            content: '☐';
            position: absolute;
            left: 0;
            color: #ffc107;
            font-weight: bold;
        }
        .emoji {
            font-size: 1.2em;
        }
        .quote {
            text-align: center;
            font-style: italic;
            color: #7f8c8d;
            border-top: 2px solid #ecf0f1;
            padding-top: 20px;
            margin-top: 30px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1><span class="emoji">👋</span> Hi there! I'm Darell Anne V. Bersamira</h1>
        
        <h2><span class="emoji">🎓</span> About Me</h2>
        <ul>
            <li><strong>Name:</strong> Darell Anne V. Bersamira</li>
            <li><strong>Program:</strong> Bachelor of Science in Information Technology (4th Year)</li>
            <li><strong>Specialization:</strong> Web Development</li>
            <li><strong>Current Status:</strong> BSIT4 Student passionate about creating innovative web solutions</li>
        </ul>

        <h2><span class="emoji">💻</span> Technical Skills</h2>
        <div class="skills-grid">
            <div class="skill-category">
                <h3>Frontend Development</h3>
                <ul>
                    <li>HTML5, CSS3, JavaScript (ES6+)</li>
                    <li>React.js, Vue.js</li>
                    <li>Responsive Web Design</li>
                    <li>Bootstrap, Tailwind CSS</li>
                    <li>jQuery</li>
                </ul>
            </div>
            <div class="skill-category">
                <h3>Backend Development</h3>
                <ul>
                    <li>Node.js, Express.js</li>
                    <li>PHP, Laravel</li>
                    <li>Python, Django/Flask</li>
                    <li>RESTful APIs</li>
                    <li>Database integration</li>
                </ul>
            </div>
            <div class="skill-category">
                <h3>Databases</h3>
                <ul>
                    <li>MySQL, PostgreSQL</li>
                    <li>MongoDB</li>
                    <li>Firebase</li>
                </ul>
            </div>
            <div class="skill-category">
                <h3>Tools & Technologies</h3>
                <ul>
                    <li>Git & GitHub</li>
                    <li>VS Code, Sublime Text</li>
                    <li>Chrome DevTools</li>
                    <li>Postman</li>
                    <li>npm, Composer</li>
                </ul>
            </div>
        </div>

        <h2><span class="emoji">🚀</span> Current Focus</h2>
        <ul>
            <li>Building full-stack web applications</li>
            <li>Learning modern JavaScript frameworks</li>
            <li>Exploring cloud technologies</li>
            <li>Improving UI/UX design skills</li>
            <li>Contributing to open-source projects</li>
        </ul>

        <h2><span class="emoji">📚</span> Academic Projects</h2>
        <div class="project">
            <strong>E-commerce Website:</strong> Full-stack online shopping platform with payment integration
        </div>
        <div class="project">
            <strong>Task Management System:</strong> React-based productivity application
        </div>
        <div class="project">
            <strong>Restaurant Website:</strong> Responsive design with online reservation system
        </div>
        <div class="project">
            <strong>Student Information System:</strong> PHP/MySQL-based academic management platform
        </div>

        <h2><span class="emoji">🌱</span> Currently Learning</h2>
        <ul>
            <li>Advanced React patterns and hooks</li>
            <li>GraphQL and Apollo Client</li>
            <li>Cloud deployment (AWS, Heroku)</li>
            <li>Mobile app development with React Native</li>
            <li>DevOps fundamentals</li>
        </ul>

        <h2><span class="emoji">🔗</span> Connect With Me</h2>
        <div class="contact-links">
            <a href="mailto:your.email@example.com">Email</a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
            <a href="https://yourportfolio.com" target="_blank">Portfolio</a>
            <a href="https://twitter.com/yourusername" target="_blank">Twitter</a>
            <a href="https://github.com/yourusername" target="_blank">GitHub</a>
        </div>

        <h2><span class="emoji">💡</span> Fun Facts</h2>
        <ul>
            <li><span class="emoji">🎯</span> Goal: To become a full-stack developer and contribute to meaningful tech projects</li>
            <li><span class="emoji">🌟</span> Interests: Web technologies, UI/UX design, and emerging tech trends</li>
            <li><span class="emoji">📖</span> Always eager to learn new technologies and frameworks</li>
            <li><span class="emoji">🤝</span> Open to collaboration and networking opportunities</li>
        </ul>

        <h2><span class="emoji">📈</span> Goals for 2025</h2>
        <div class="goals">
            <ul>
                <li>Complete advanced web development certification</li>
                <li>Contribute to 5+ open-source projects</li>
                <li>Build and deploy 3 major portfolio projects</li>
                <li>Land an internship or entry-level web developer position</li>
                <li>Learn cloud computing and DevOps practices</li>
            </ul>
        </div>

        <div class="quote">
            <p><strong>"Code is poetry written in logic"</strong></p>
            <p><em>Feel free to explore my repositories and don't hesitate to reach out for collaboration or just to say hi!</em></p>
        </div>
    </div>
</body>
</html>
