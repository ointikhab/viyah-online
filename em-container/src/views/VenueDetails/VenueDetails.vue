<template>
    <RemoteVenueDetails :id="venueId" :extra-prop="extraData" />
</template>

<script setup>
import { useRoute } from 'vue-router';
import { defineAsyncComponent } from 'vue';
// dynamically load remote component
const RemoteVenueDetails = defineAsyncComponent(() =>
    import('detailApp/VenueDetails')
);
const route = useRoute();
const venueId = route.params.id;

// optional extra data or functions
const extraData = { source: 'container' };
</script>