<template>
    <div class="h-screen w-screen bg-gray-200 flex justify-center ">
        <div class="text-center text-gray-700 self-center">
            <h1 class="text-6xl text-shadow">404</h1>
            <h3 class="text-4xl text-shadow">The page can not be found !</h3>
            <div class="absolute bottom-0 mb-12 text-gray-600 text-center text-xl">
                <span class="opacity-50">  take me pack to </span><a href="#" class="bode-b" @click="$router.go(-1)">were i was</a>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    
}
</script>