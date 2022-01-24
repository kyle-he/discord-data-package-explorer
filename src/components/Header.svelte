<script>
    import { link, navigate } from 'svelte-routing';
</script>

<template>
    <div class="app-header">
        <div class="app-header-container">
            <h1 on:click="{() => navigate('/')}">Discord Data Package Explorer (Expanded)</h1>
        </div>
    </div>
</template>

<style lang="scss">
    .app-header {
        width: 100%;
        position: fixed;
        background-color: var(--main-color);
        z-index: 9;
    }
    .app-header-container {
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;

        h1 {
            font-size: 1.5rem;
            font-weight: 800;
            cursor: pointer;
        }
    }
    .app-header-icon {
        text-align: center;
        margin-left: 0.5rem;

        a {
            color: white !important;
            text-decoration: none;
        }
    }
</style>
