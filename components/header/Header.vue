<template>
    <header class="w-full flex fixed lg:flex-col bg-slate-950 h-36 lg:h-screen lg:w-60 shadow-xl shadow-slate-900 z-50">
        <div class="relative w-full flex flex-col h-full justify-between lg:justify-start">
            <div class="flex gap-2 lg:gap-0 lg:flex-col items-center lg:mb-6 p-3">
                <Image src="images/profilePic.webp" className="rounded-full w-16 lg:w-48" alt="Profile Picture" />
                <div class="flex flex-col lg:items-center lg:mb-3">
                    <h1 class="text-2xl lg:text-3xl">Nick Mallory</h1>
                    <h2 class="text-lg lg:text-xl text-gray-300">Web Developer</h2>
                </div>
                <HeaderSocialLinks />
            </div>
            <Nav />
        </div>
    </header>
</template>