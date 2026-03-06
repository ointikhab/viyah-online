<template>
    <div class="min-h-screen bg-gray-100 py-10">

        <div class="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">

            <!-- Header -->
            <div class="mb-8">
                <h2 class="text-3xl font-bold text-gray-800">
                    Register Your Wedding Venue
                </h2>
                <p class="text-gray-500 mt-1">
                    Fill in the details to list your venue on our platform
                </p>
            </div>

            <form @submit.prevent="submitVenue" class="space-y-8">

                <!-- BASIC INFO -->
                <div>
                    <h3 class="text-lg font-semibold text-gray-700 mb-4">
                        Basic Information
                    </h3>

                    <div class="grid md:grid-cols-2 gap-5">

                        <div>
                            <label class="text-sm text-gray-600">Venue Name</label>
                            <input v-model="form.title" type="text" placeholder="Grand Ballroom"
                                class="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                        </div>

                        <div>
                            <label class="text-sm text-gray-600">Price</label>
                            <input v-model="form.price" type="number" placeholder="5000"
                                class="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                        </div>

                    </div>
                </div>


                <!-- LOCATION -->
                <div>
                    <h3 class="text-lg font-semibold text-gray-700 mb-4">
                        Location
                    </h3>

                    <div class="grid md:grid-cols-2 gap-5">

                        <div>
                            <label class="text-sm text-gray-600">City</label>
                            <select v-model="form.city"
                                class="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500">
                                <option disabled value="">Select City</option>
                                <option v-for="city in cities" :key="city">
                                    {{ city }}
                                </option>
                            </select>
                        </div>

                        <div>
                            <label class="text-sm text-gray-600">Venue Type</label>
                            <select v-model="form.venueType"
                                class="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500">
                                <option disabled value="">Select Type</option>
                                <option v-for="type in venueTypes" :key="type">
                                    {{ type }}
                                </option>
                            </select>
                        </div>

                    </div>
                </div>


                <!-- STAFF & FACILITIES -->
                <div>
                    <h3 class="text-lg font-semibold text-gray-700 mb-4">
                        Staff & Facilities
                    </h3>

                    <div class="grid md:grid-cols-2 gap-5 items-center">

                        <div>
                            <label class="text-sm text-gray-600">Staff</label>
                            <select v-model="form.staff"
                                class="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500">
                                <option disabled value="">Select Staff</option>
                                <option v-for="staff in staffOptions" :key="staff">
                                    {{ staff }}
                                </option>
                            </select>
                        </div>

                        <div class="flex gap-6 mt-6">

                            <label class="flex items-center gap-2 text-gray-700">
                                <input type="checkbox" v-model="form.parking" class="w-4 h-4">
                                Parking
                            </label>

                            <label class="flex items-center gap-2 text-gray-700">
                                <input type="checkbox" v-model="form.wheelchair" class="w-4 h-4">
                                Wheelchair Access
                            </label>

                        </div>

                    </div>
                </div>


                <!-- DESCRIPTION -->
                <div>
                    <h3 class="text-lg font-semibold text-gray-700 mb-3">
                        Description
                    </h3>

                    <textarea v-model="form.description" rows="4" placeholder="Describe your venue..."
                        class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"></textarea>
                </div>


                <!-- IMAGES -->
                <div>
                    <h3 class="text-lg font-semibold text-gray-700 mb-4">
                        Venue Images
                    </h3>

                    <div class="flex gap-3 mb-4">

                        <input v-model="imageInput" type="text" placeholder="Paste image URL"
                            class="flex-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500" />

                        <button type="button" @click="addImage"
                            class="bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700">
                            Add
                        </button>

                    </div>

                    <!-- Image Preview -->
                    <div class="grid grid-cols-3 gap-4">

                        <div v-for="(img, i) in form.images" :key="i" class="relative">
                            <img :src="img" class="rounded-lg h-24 w-full object-cover border" />

                            <button type="button" @click="removeImage(i)"
                                class="absolute top-1 right-1 bg-black text-white text-xs px-2 py-0.5 rounded">
                                ✕
                            </button>
                        </div>

                    </div>
                </div>


                <!-- SUBMIT -->
                <div class="pt-4">

                    <button type="submit"
                        class="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition">
                        Submit Venue
                    </button>

                </div>

            </form>

        </div>

    </div>
</template>

<script setup>
import { ref } from "vue"
import { CITIES, STAFF_OPTIONS, VENUE_TYPES } from "@/constants/FilterBarConstants"

const cities = CITIES
const venueTypes = VENUE_TYPES
const staffOptions = STAFF_OPTIONS

const form = ref({
    title: "",
    price: "",
    city: "",
    venueType: "",
    staff: "",
    parking: false,
    wheelchair: false,
    description: "",
    images: []
})

const imageInput = ref("")

const addImage = () => {
    if (!imageInput.value) return
    form.value.images.push(imageInput.value)
    imageInput.value = ""
}

const removeImage = (index) => {
    form.value.images.splice(index, 1)
}

const submitVenue = () => {
    console.log("Submitted venue:", form.value)
}
</script>