class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    getDogHtml() {
        const {name, avatar, age, bio,} = this
        return `
        <img src="badge-like.png" id="yes" class="grade" style="display: none">
        <img src="badge-nope.png" id="nope" class="grade" style="display: none">
        
        <img src=${avatar} class="image">
        
        <div class="dogsBio">
            <h2 class="info">${name}, ${age}</h2>
            <p class="bio">${bio}</p>
        </div>
    
        `
    }
}

export default Dog