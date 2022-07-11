import React from "react";
import "./style.css";

const MainTop = () => {
    return (
        <div
            className="ui two column stackable grid container"
            style={{ paddingTop: "35px" }}
        >
            <div className="column">
                <h2>About me, knowledge and skills</h2>
                <br />
                <h3>Name and surname:</h3>
                <p className="p_inside_tab">Jakub Pelz</p>
                <h3>Date of birth:</h3>
                <p className="p_inside_tab">6/8/1987</p>
                <h3>Adress:</h3>
                <p className="p_inside_tab">Veselíčko, 75125</p>
                <h3>Contact:</h3>
                <p className="p_inside_tab">+420 775 553 382</p>
                <p className="p_inside_tab">jakubpelz@gmail.com</p>
                <h3>Education:</h3>
                <p className="p_inside_tab">
                    Software development in Unicorn Univeristy
                </p>
                <p className="p_inside_tab">
                    A lot's of Udemy online courses like:
                    <ul>
                        <li>The Web Developer Bootcamp</li>
                        <li>Modern React with Redux</li>
                        <li>JavaScript: The Advanced Concepts</li>
                        <li>TypeScript: The Complete Developer's guide</li>
                        <li>and few more...</li>
                    </ul>
                </p>
                <h3>Language skills:</h3>
                <p className="p_inside_tab">CZ - native speaker</p>
                <p className="p_inside_tab">EN - B1</p>
                <h3>Digital competence:</h3>
                <p className="p_inside_tab">Node</p>
                <p className="p_inside_tab">React</p>
                <p className="p_inside_tab">Express</p>
                <p className="p_inside_tab">MongoDB</p>
                <p className="p_inside_tab">Visual Studio</p>
                <p className="p_inside_tab">Microsoft Word | Excel</p>
                <h3>Job related skills:</h3>
                <p className="p_inside_tab">Adaptability</p>
                <p className="p_inside_tab">Teachability</p>
                <p className="p_inside_tab">Flexibility</p>
                <p className="p_inside_tab">Overcoming challenges skills</p>
                <p className="p_inside_tab">Diligence</p>
                <h3>Hobbies:</h3>
                <p className="p_inside_tab">Running</p>
                <p className="p_inside_tab">Fitness</p>
                <p className="p_inside_tab">Skiing</p>
                <p className="p_inside_tab">Snowboarding</p>
                <p className="p_inside_tab">Fantasy & Sci-fi</p>
                <h3>Others:</h3>
                <p className="p_inside_tab">Driver licenc A,B</p>
                <p className="p_inside_tab">Training coureses</p>
                <p className="p_inside_tab">Communication coureses</p>
            </div>
            <div className="column">
                <h2>A more detailed look at my skills</h2>
                <br />
                <br />
                <br />
                <div className="ui two column grid">
                    <div className="ui raised segment max_width">
                        <a href="/" className="ui teal ribbon label p_inside">
                            Programming languages
                        </a>
                        <br />
                        <br />
                        <p className="p_inside20">
                            <b>Which programming languages do I prefer?</b>
                        </p>

                        <p className="p_inside20">
                            <>
                                <ul>
                                    <li>JavaScript</li>
                                    <li>TypeScript</li>
                                </ul>
                                <ul>
                                    <li>API</li>
                                </ul>
                                <ul>
                                    <li>HTML</li>
                                    <li>css</li>
                                    <li>jQuery</li>
                                </ul>
                                <ul>
                                    <li>UML</li>
                                    <li>AGILE</li>
                                </ul>
                            </>
                        </p>
                        <br />
                    </div>
                    <div className="ui raised segment max_width">
                        <a href="/" className="ui teal ribbon label p_inside">
                            Frameworks
                        </a>
                        <br />
                        <p className="p_inside20">
                            <b></b>
                        </p>
                        <p className="p_inside20">
                            Which of frameworks can I use?
                        </p>
                        <>
                            <ul className="p_inside20">
                                <li>Rect & Reduct</li>
                                <li>Next</li>
                                <li>Express</li>
                                <li>Nest</li>
                                <li>Bootsrap, React-Bootstrap</li>
                                <li>Semantic UI</li>
                                <li>MUI</li>
                                <li>Firebase </li>
                                <li>MongoDB</li>
                                <li>Wordpress</li>
                            </ul>
                        </>
                        <br />
                    </div>
                    <div className="ui raised segment max_width">
                        <a href="/" className="ui teal ribbon label p_inside">
                            Experience with no-paid IT projects
                        </a>
                        <br />
                        <br />
                        <p className="p_inside20">
                            <b>WeatherApp:</b> FE pure react app
                        </p>
                        <p className="p_inside20">
                            <>
                                <li>2x API</li>
                                <li>
                                    pure CSS (full responsible) with no
                                    frameworks
                                </li>
                                <li>Reducer</li>
                                <li>
                                    search box with whisperer (more than 200.000
                                    cities in one file)
                                </li>
                            </>
                        </p>
                        <p className="p_inside20">
                            <b>GalleryApp</b> FE and BE all programmed in
                            TypeScript
                        </p>
                        <p className="p_inside20">
                            <>
                                <li>
                                    Photos are stored in MongoDB and uploaded to
                                    local disk
                                </li>
                                <li>
                                    User can create, delete and manage galleries
                                </li>
                                <li>
                                    Each page with more than 10 photos has an
                                    automatic paginator{" "}
                                </li>
                            </>
                        </p>
                        <p className="p_inside20">
                            <b>And much, much more...</b>
                        </p>
                        <br />
                    </div>
                    <div className="ui raised segment max_width">
                        <a href="/" className="ui teal ribbon label p_inside">
                            Experience with PAID IT projects
                        </a>
                        <br />
                        <br />
                        <p className="p_inside20">
                            <b>Small local restaurant</b>
                        </p>
                        <p className="p_inside20">
                            <>
                                <li>Wordpress page</li>
                            </>
                        </p>
                        <p className="p_inside20">
                            <b>Huge</b> internal project for heating engineers
                        </p>
                        <p className="p_inside20">
                            <>
                                <li>Nest.js, React project</li>
                                <li>
                                    Authorization, authentication, validation of
                                    users
                                </li>
                                <li>MUI implementation</li>
                                <li>
                                    The company can add an environment that can
                                    be connected via validation to an IoT device
                                    using token generation, create a workspace
                                    with rooms with measured temperature.
                                </li>
                            </>
                        </p>
                        <p className="p_inside20">
                            <b>Small projects</b> working with components
                        </p>
                        <p className="p_inside20">
                            <>
                                <li>e-shop shopping cart management</li>
                                <li>SEO optimization</li>
                                <li>
                                    Adjustments to FE functions such as GA on
                                    GA4
                                </li>
                                <li>AND more...</li>
                            </>
                        </p>
                        <p className="p_inside20">
                            <b>I'm currently working on:</b> Restaurant system
                            for small businesses
                        </p>
                        <p className="p_inside20">
                            <>
                                <li>TypeScript App</li>
                                <li>MERN</li>
                                <li>IoT - printer</li>
                            </>
                        </p>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainTop;
