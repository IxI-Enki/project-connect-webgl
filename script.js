document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });

    document.getElementById('role').addEventListener('change', function() {
        const roomInput = document.getElementById('roomInput');
        if (this.value === 'player') {
            roomInput.style.display = 'block';
        } else {
            roomInput.style.display = 'none';
        }
    });
});

function startGame() {
    const username = document.getElementById('username').value;
    const role = document.getElementById('role').value;
    const room = document.getElementById('room').value;

    if (role === 'spectator') {
        window.location.href = `game.html?role=spectator&room=${username}-${Math.random().toString(36).substring(7)}`;
    } else {
        window.location.href = `game.html?role=player&room=${room}`;
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

function toggleDevPanel() {
    const devPanel = document.getElementById('devPanel');
    devPanel.classList.toggle('show');
}

function devLogin() {
    const username = document.getElementById('dev-username').value;
    const password = document.getElementById('dev-password').value;
    alert(`Dev Login attempted with Username: ${username} and Password: ${password}`);
}

// Event-Listener für Tastenkombination
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.altKey && event.key === '.') {
        toggleDevPanel();
    }
});
