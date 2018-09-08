<template>
  <div id="app">
    <transition name="" enter-active-class="zoomIn" leave-active-class="zoomOut" mode="out-in">
      <router-view class="animated"/>
    </transition>
  </div>
</template>
