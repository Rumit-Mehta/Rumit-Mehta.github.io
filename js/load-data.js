import data from '../config/user-data.js';

document.addEventListener("DOMContentLoaded", () => {
    // Update title
    const titleEl = document.getElementById("title");
    if (titleEl) titleEl.textContent = data.title;

    // Update name
    const nameEl = document.getElementById("name");
    if (nameEl) nameEl.textContent = data.name;

    // Update summary
    const summaryEl = document.getElementById("summary");
    if (summaryEl) summaryEl.textContent = data.summary;

    // Update contact info
    const phoneEl = document.getElementById("phone");
    if (phoneEl) {
        phoneEl.textContent = data.contact.phone;
        phoneEl.href = `tel:${data.contact.phone}`;
    }

    const whatsappEl = document.getElementById("whatsapp");
    if (whatsappEl) {
        const phone = data.contact.phone.replace(/\D/g, ''); // strip non-digits
        whatsappEl.textContent = data.contact.phone;
        whatsappEl.href = `https://wa.me/${phone}`;
    }

    const emailEl = document.getElementById("email");
    if (emailEl) {
        emailEl.textContent = data.contact.email;
        emailEl.href = `mailto:${data.contact.email}`;
    }      

    const locationEL = document.getElementById("location");
    if (locationEL) locationEL.innerHTML = data.contact.location;

    const linkedinEl = document.getElementById("linkedin");
    if (linkedinEl) {
        linkedinEl.textContent = data.contact.linkedin;
        linkedinEl.href = data.contact.linkedin;
    }

    // Update work experience
    const workContainer = document.getElementById("work-dynamic");
    if (workContainer && Array.isArray(data.work)) {
        data.work.forEach(job => {
            const jobEl = document.createElement("article");
            jobEl.className = "timeline-entry";

            jobEl.innerHTML = `
            <div class="timeline-entry-inner">
                <div class="timeline-icon color-2">
                    <i class="fa ${job.icon}"></i>
                </div>
                    <div class="timeline-label">
                        <h2>${job.company} <span>${job.date}</span></h2>
                        <span class="timeline-sublabel">
                            <span style="flex: 1;">${job.title}</span>
                            <span style="flex-shrink: 0; margin-left: 10px;">${job.location}</span>
                        </span> 
                        <span class="timeline-text">
                            <ul>
                                ${job.highlights.map(h => `<li>${h}</li>`).join("")}
                            </ul>
                        </span>  
                        <div class = "tag-row">
                            ${job.tags.map(tag => `<span class="timeline-tag">${tag}</span>`).join(" ")}
                        </div>
                    </div>
            </div>
            `;

            workContainer.appendChild(jobEl);
        });
    }

    // Update portfolio 
    const portfolioContainer = document.getElementById("portfolio-dynamic");
    if (portfolioContainer && Array.isArray(data.projects)) {
        data.projects.forEach(project => {

            const wrapperDiv = document.createElement("div");
            wrapperDiv.className = "col-six tab-full";
            const portfolioEL = document.createElement("article");
            portfolioEL.className = "portfolio-entry";

            portfolioEL.innerHTML = `
            <div class="portfolio-inner coloured">
                <div class="portfolio-label" id="portfolio-label">
                    <h2>${project.name}</h2>
                    <span class="portfolio-sublabel">${project.location}</span>
                    <p class="portfolio-text">${project.description}</p>
                    <div class = "tag-row">
                    ${project.tags.map(tag => `<span class="timeline-tag">${tag}</span>`).join(" ")}
                    </div>
                </div>
            </div>
            `;
 
            wrapperDiv.appendChild(portfolioEL);
            portfolioContainer.appendChild(wrapperDiv);
        });
     }


    // Update education
    const eduContainer = document.getElementById("education");
    if (eduContainer && Array.isArray(data.education)) {
        data.education.forEach(edu => {
            const eduEl = document.createElement("div");
            eduEl.className = "education-block";

            let degreeHTML = "";
            if (Array.isArray(edu.degrees)) {
                degreeHTML = edu.degrees.map(degree => `
                    <h4>${degree.title} (${degree.duration})</h4>
                    <ul>${degree.notes.map(note => `<li>${note}</li>`).join("")}</ul>
                `).join("");
            } else {
                degreeHTML = `
                    <h4>${edu.degrees.title} (${edu.degrees.duration})</h4>
                    <ul>${edu.degrees.notes.map(note => `<li>${note}</li>`).join("")}</ul>
                `;
            }

            eduEl.innerHTML = `<h3>${edu.institution}</h3>${degreeHTML}`;
            eduContainer.appendChild(eduEl);
        });
    }

    // Update interests
    const interestsContainer = document.getElementById("interests");
    if (interestsContainer && data.interests) {
        interestsContainer.innerHTML = `
            <p><strong>Activities:</strong> ${data.interests.activities.join(", ")}</p>
            <p><strong>Hobbies:</strong> ${data.interests.hobbies.join(", ")}</p>
            <p><strong>Mobility:</strong> ${data.interests.mobility}</p>
        `;
    }
    
    // You can continue this pattern for other data like experience, education, etc.
});