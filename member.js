function skillsMember() {
    const member = JSON.parse(localStorage.getItem('member'));
    let skills = member.skills;
    let list = '';
    skills.forEach(skill => {
        list += `<li>${skill}</li>`;
    });
    document.querySelector('.skills').innerHTML = list;
}