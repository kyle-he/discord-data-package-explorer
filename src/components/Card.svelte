<script>
    export let name;
</script>

<div class="card {name}">
    <slot></slot>
</div>

<style>
    .card {
        background-color: #202225;
        border-radius: 10px;
        padding: 20px;
    }
    @media (min-width: 600px) {
        .card.profile {
            grid-column: 1 / 4;
        }
        .card.first {
            grid-column: 4 / 8;
        }
        .card.second {
            grid-column: 8 / 12;
        }

        .card.third {
            grid-column: 1 / 6;
            grid-row: 2 / 3;
        }
        .card.hours {
            grid-column: 6 / 12;
            grid-row: 2 / 3;
        }

        .card.top-users {
            grid-column: 1 / 6;
            grid-row: 3 / 4;
        }
        .card.top-group-dms {
            grid-column: 6 / 12;
            grid-row: 3 / 4;
        }

        .card.top-users-2 {
            grid-column: 1 / 6;
            grid-row: 4 / 5;
        }
        .card.top-channels {
            grid-column: 6 / 12;
            grid-row: 4 / 5;
        }

        .card.about {
            grid-column: 1 / 6;
            grid-row: 5 / 6;
        }
        .card.about-2 {
            grid-column: 6 / 12;
            grid-row: 5 / 6;
        }
    }
</style>
