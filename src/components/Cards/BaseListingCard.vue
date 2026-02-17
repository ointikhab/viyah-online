<template>
    <div class="bg-white rounded-2xl shadow-sm overflow-hidden
           flex flex-col lg:flex-row
           hover:shadow-lg transition duration-300">

        <!-- IMAGE AREA -->
        <div class="lg:w-1/3 w-full relative">
            <slot name="image" />
        </div>

        <!-- CONTENT -->
        <div class="flex-1 p-5 flex flex-col justify-between">

            <div>

                <!-- TOP ROW -->
                <div class="flex justify-between items-start">
                    <slot name="price" />
                    <slot name="badge" />
                </div>

                <slot name="title" />
                <slot name="meta" />
                <slot name="location" />

            </div>

            <!-- ACTIONS -->
            <div class="mt-5 flex flex-wrap gap-3">
                <slot name="actions" />
            </div>

        </div>
    </div>
</template>
