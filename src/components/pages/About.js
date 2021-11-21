import React from 'react';
import AshleyPic from '../images/Ashley.png';
function About() {
    return(
        <div>
            <article class="resume-wrapper text-center position-relative">
	    <div class="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
		    <header class="resume-header pt-4 pt-md-0">
			    <div class="media flex-column flex-md-row">
				    <img class="mr-3 img-fluid picture mx-auto" src={AshleyPic} alt=""></img>
				    <div class="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
					    <div class="primary-info">
						    <h1 class="name mt-0 mb-1 text-white text-uppercase text-uppercase">Ashley Ong</h1>
						    <div class="title mb-3">Computer Engineer</div>
						    <ul class="list-unstyled">
							    <li class="mb-2"><a href="mailto:ashley_2461994@hotmail.com"><i class="far fa-envelope fa-fw mr-2" data-fa-transform="grow-3"></i>ashley_2461994@hotmail.com</a></li>
							    <li><i class="fas fa-mobile-alt fa-fw mr-2" data-fa-transform="grow-6"></i>+65 9832 9188</li>
						    </ul>
					    </div>
					    <div class="secondary-info ml-md-auto mt-2">
						    <ul class="resume-social list-unstyled">
				                <li class="mb-3"><a href="https://www.linkedin.com/in/ashley-ong-2816a8105/"><span class="fa-container text-center mr-2"><i class="fab fa-linkedin-in fa-fw"></i></span>linkedin.com/in/ashley-ong-2816a8105/</a></li>
				                <li class="mb-3"><a href="https://github.com/ashleyyy94"><span class="fa-container text-center mr-2"><i class="fab fa-github-alt fa-fw"></i></span>github.com/ashleyyy94</a></li>
				                <li><a href="https://www.ashleyong.xyz"><span class="fa-container text-center mr-2"><i class="fas fa-globe"></i></span>www.ashleyong.xyz</a></li>
						    </ul>
					    </div>
					    
				    </div>
			    </div>
		    </header>
		    <div class="resume-body p-5">
			    <section class="resume-section summary-section mb-5">
				    <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Career Summary</h2>
				    <div class="resume-section-content">
					    <p class="mb-0">Currently working in JTC as a Data Engineer. I focus mainly on Frontend development using ReactJS with a supporting C# API Backend.</p>
				    </div>
			    </section>
			    <div class="row">
				    <div class="col-lg-9">
					    <section class="resume-section experience-section mb-5">
						    <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Work Experience</h2>
						    <div class="resume-section-content">
							    <div class="resume-timeline position-relative">
								    <article class="resume-timeline-item position-relative pb-5">
									    
									    <div class="resume-timeline-item-header mb-2">
										    <div class="d-flex flex-column flex-md-row">
										        <h3 class="resume-position-title font-weight-bold mb-1">Frontend Software Developer</h3>
										        <div class="resume-company-name ml-auto">Jurong Town Corporation</div>
										    </div>
										    <div class="resume-position-time">May 2018 – Aug 2018</div>
									    </div>
									    <div class="resume-timeline-item-desc">
										    <ul>
											    <li>Added geospatial layers to ePlanner for the company’s internal use with their cluster officers.</li>
											    <li>Used ReactJS for front-end development to display suitable map information with KPIs that can be seen at a glance, increasing the performance of land surveyors on the ground.</li>
										    </ul>
										    <h4 class="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
										    <ul class="list-inline">
											    <li class="list-inline-item"><span class="badge badge-primary badge-pill">React</span></li>
												<li class="list-inline-item"><span class="badge badge-primary badge-pill">Python</span></li>
												<li class="list-inline-item"><span class="badge badge-primary badge-pill">ArGIS</span></li>
											    <li class="list-inline-item"><span class="badge badge-primary badge-pill">Webpack</span></li>
											    <li class="list-inline-item"><span class="badge badge-primary badge-pill">HTML/CSS</span></li>
											    <li class="list-inline-item"><span class="badge badge-primary badge-pill">PostgresSQL</span></li>
										    </ul>
									    </div>

								    </article>
								    
								    <article class="resume-timeline-item position-relative pb-5">
									    
									    <div class="resume-timeline-item-header mb-2">
										    <div class="d-flex flex-column flex-md-row">
										        <h3 class="resume-position-title font-weight-bold mb-1">Innovation Office Intern</h3>
										        <div class="resume-company-name ml-auto">Certis Cisco / BRI Security (Australia)</div>
										    </div>
										    <div class="resume-position-time">May 2017 – Oct 2017</div>
									    </div>
									    <div class="resume-timeline-item-desc">
											<ul>
												<li>Evaluated mobile processors like Snapdragon 835 for Machine Learning and Neural Networks.</li>
												<li>Used OutSystems to create a dashboard to support security operations, reducing manual overhead of checking in with security officers and improving overall deployment efficiency.</li>
												<li>Designed a mobile app to act as an access controller using 2FA biometrics like fingerprints and iris patterns, which was implemented throughout the department to replace card access.</li>
											</ul>
											<h4 class="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
										    <ul class="list-inline">
											    <li class="list-inline-item"><span class="badge badge-primary badge-pill">cuDNN</span></li>
											    <li class="list-inline-item"><span class="badge badge-primary badge-pill">OutSystems</span></li>
											    <li class="list-inline-item"><span class="badge badge-primary badge-pill">Android</span></li>
											    <li class="list-inline-item"><span class="badge badge-primary badge-pill">Javascript</span></li>
											    <li class="list-inline-item"><span class="badge badge-primary badge-pill">MySQL</span></li>
										    </ul>
									    </div>

								    </article>
								    
								    <article class="resume-timeline-item position-relative pb-5">
									    
									    <div class="resume-timeline-item-header mb-2">
										    <div class="d-flex flex-column flex-md-row">
										        <h3 class="resume-position-title font-weight-bold mb-1">Microsoft Student Partner</h3>
										        <div class="resume-company-name ml-auto">Microsoft</div>
										    </div>
										    <div class="resume-position-time">May 2017 – Present</div>
									    </div>
									    <div class="resume-timeline-item-desc">
											<ul>
												<li>Conducted an Introduction to Machine Learning Workshop for students in NUS and shared on the uses of Microsoft Azure.</li>
												<li>Assisted in hosting Microsoft APAC MSP Summit in May 2018 held in NUS.</li>
											</ul>
											<h4 class="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
										    <ul class="list-inline">
											    <li class="list-inline-item"><span class="badge badge-primary badge-pill">Microsoft Azure</span></li>
										    </ul>
									    </div>

								    </article>
								    
								    <article class="resume-timeline-item position-relative">
									    
									    <div class="resume-timeline-item-header mb-2">
										    <div class="d-flex flex-column flex-md-row">
										        <h3 class="resume-position-title font-weight-bold mb-1">Geospatial Division Intern</h3>
										        <div class="resume-company-name ml-auto">Singapore Land Authority</div>
										    </div>
										    <div class="resume-position-time">Jan-July 2015, Dec 2015</div>
									    </div>
									    <div class="resume-timeline-item-desc">
										    <ul>
												<li>Used ArcMap to update buildings and street names for OneMap 2.0.</li>
												<li>Assisted in the development of the OneMap application for SLA by importing and verifying data for the application, ensuring that it reached launch deadline on time.</li>
											</ul>
										    <h4 class="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
										    <ul class="list-inline">
											    <li class="list-inline-item"><span class="badge badge-primary badge-pill">ArcGIS</span></li>
											    <li class="list-inline-item"><span class="badge badge-primary badge-pill">ArcMAP</span></li>
											    <li class="list-inline-item"><span class="badge badge-primary badge-pill">GeoServer</span></li>
										    </ul>
									    </div>

								    </article>
								    
								    
							    </div>
							    
							    
							    
							    
							    
							    
						    </div>
					    </section>
				    </div>
				    <div class="col-lg-3">
					    <section class="resume-section skills-section mb-5">
						    <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills &amp; Tools</h2>
						    <div class="resume-section-content">
						        <div class="resume-skill-item">
							        <h4 class="resume-skills-cat font-weight-bold">Frontend</h4>
							        <ul class="list-unstyled mb-4">
								        <li class="mb-2">
								            <div class="resume-skill-name">React</div>
									        <div class="progress resume-progress">
											    <div class="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: "94%", ariaValuenow:"25", ariaValuemin:"0", ariaValuemax:"100"}}></div>
											</div>
								        </li>
								        <li class="mb-2">
								            <div class="resume-skill-name">JavaScript</div>
									        <div class="progress resume-progress">
											    <div class="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: "100%", ariaValuenow:"25", ariaValuemin:"0", ariaValuemax:"100"}}></div>
											</div>
								        </li>
								        
								        <li class="mb-2">
								            <div class="resume-skill-name">Node.js</div>
									        <div class="progress resume-progress">
											    <div class="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: "90%", ariaValuenow:"25", ariaValuemin:"0", ariaValuemax:"100"}}></div>
											</div>
								        </li>
								        <li class="mb-2">
								            <div class="resume-skill-name">HTML/CSS/SASS/LESS</div>
									        <div class="progress resume-progress">
											    <div class="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: "100%", ariaValuenow:"25", ariaValuemin:"0", ariaValuemax:"100"}}></div>
											</div>
								        </li>
							        </ul>
						        </div>
						        
						        <div class="resume-skill-item">
						            <h4 class="resume-skills-cat font-weight-bold">Backend</h4>
							        <ul class="list-unstyled">
								        <li class="mb-2">
								            <div class="resume-skill-name">Python/Django</div>
									        <div class="progress resume-progress">
											    <div class="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: "98%", ariaValuenow:"25", ariaValuemin:"0", ariaValuemax:"100"}}></div>
											</div>
								        </li>
								        <li class="mb-2">
								            <div class="resume-skill-name">Ruby/Rails</div>
									        <div class="progress resume-progress">
											    <div class="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: "80%", ariaValuenow:"25", ariaValuemin:"0", ariaValuemax:"100"}}></div>
											</div>
								        </li>
							        </ul>
						        </div>
						        
						        <div class="resume-skill-item">
						            <h4 class="resume-skills-cat font-weight-bold">Others</h4>
						            <ul class="list-inline">
										<li class="list-inline-item"><span class="badge bg-light text-dark">Machine Learning</span></li>
										<li class="list-inline-item"><span class="badge bg-light text-dark">ArcGIS</span></li>
										<li class="list-inline-item"><span class="badge bg-light text-dark">OutSystems</span></li>
							            <li class="list-inline-item"><span class="badge bg-light text-dark">DevOps</span></li>
							            <li class="list-inline-item"><span class="badge bg-light text-dark">Code Review</span></li>
							            <li class="list-inline-item"><span class="badge bg-light text-dark">Git</span></li>
							            <li class="list-inline-item"><span class="badge bg-light text-dark">Unit Testing</span></li>
						            </ul>
						        </div>
						    </div>
					    </section>
					    <section class="resume-section education-section mb-5">
						    <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Education</h2>
						    <div class="resume-section-content">
							    <ul class="list-unstyled">
								    <li class="mb-2">
								        <div class="resume-degree font-weight-bold">Bachelor of Engineering (Computer Engineering)</div>
								        <div class="resume-degree-org">National University of Singapore</div>
								        <div class="resume-degree-time">2015 - 2019</div>
								    </li>
							    </ul>
						    </div>
					    </section>
					    <section class="resume-section language-section mb-5">
						    <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Language</h2>
						    <div class="resume-section-content">
							    <ul class="list-unstyled resume-lang-list">
								    <li class="mb-2"><span class="resume-lang-name font-weight-bold">English</span> <small class="text-muted font-weight-normal">(Professional)</small></li>
								    <li class="mb-2 align-middle"><span class="resume-lang-name font-weight-bold">Chinese</span> <small class="text-muted font-weight-normal">(Native)</small></li>
								    <li><span class="resume-lang-name font-weight-bold">Japanese</span> <small class="text-muted font-weight-normal">(Conversational)</small></li>
							    </ul>
						    </div>
					    </section>
					    <section class="resume-section interests-section mb-5">
						    <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Interests</h2>
						    <div class="resume-section-content">
							    <ul class="list-unstyled">
								    <li class="mb-1">Web Development</li>
								    <li class="mb-1">Android</li>
									<li class="mb-1">Artificial Intelligence</li>
									<li class="mb-1">PC Building</li>
									<li class="mb-1">International Chess</li>
							    </ul>
						    </div>
					    </section>
					    
				    </div>
			    </div>
		    </div>
		    
		    
	    </div>
    </article>  

    
    <footer class="footer text-center pt-2 pb-5">
	     
                <small class="copyright">Designed by <a href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>
    </footer>
        </div>
    );
}

export default About;