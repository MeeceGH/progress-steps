let current_step = 1
const max_step = 4
const min_step = 1

const steps = document.querySelectorAll('.step')
const progress = document.getElementById('progress')

function addButtonListeners() {
    const next = document.getElementById('next-button')
    const prev = document.getElementById('back-button')

    next.addEventListener('click', () => {
        current_step += 1

        if(current_step > max_step) {
            current_step = max_step
        }

        updateStep(next, prev)
    })
    prev.addEventListener('click', () => {
        current_step -= 1

        if(current_step < min_step) {
            current_step = min_step
        }

        updateStep(next, prev)
    })
}

function updateStep(next, prev) {
    steps.forEach((step, i) => {
        if(i < current_step) {
            step.classList.add('active')
        } else {
            step.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (steps.length - 1) * 100 + '%'

    if (current_step == min_step) {
        prev.disabled = true
    }
    else if (current_step == max_step) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}

function initScript() {
    addButtonListeners()
}

initScript()