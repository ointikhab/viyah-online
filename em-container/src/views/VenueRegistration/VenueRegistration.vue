<template>
    <RemoteVenueRegistration />
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
// dynamically load remote component
const RemoteVenueRegistration = defineAsyncComponent(() =>
    import('formApp/VenueRegistration')
);
</script>