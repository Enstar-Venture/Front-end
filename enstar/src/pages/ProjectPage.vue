<template>
    <q-page>
        <div class="q-px-md q-my-sm">
            <q-carousel swipeable animated v-model="slide" thumbnails infinite>
                <q-carousel-slide :name="1"
                    img-src="https://polkastarter.com/_next/image?url=https%3A%2F%2Fassets.polkastarter.com%2Ftw0hqgyyhfz7309tec3j7nnvev50&w=1920&q=95" />
                <q-carousel-slide :name="2"
                    img-src="https://polkastarter.com/_next/image?url=https%3A%2F%2Fassets.polkastarter.com%2F5kwiklij4xqeh8llzb6hoxqppux8&w=1920&q=95" />
                <q-carousel-slide :name="3"
                    img-src="https://polkastarter.com/_next/image?url=https%3A%2F%2Fassets.polkastarter.com%2Fi5024ya74n3fn6vx6ifo77m819k1&w=1920&q=95" />
                <q-carousel-slide :name="4"
                    img-src="https://polkastarter.com/_next/image?url=https%3A%2F%2Fassets.polkastarter.com%2Ffw255thram9varyhlhmdwrsv6g4o&w=1920&q=95" />
            </q-carousel>
        </div>
        <div class="q-pa-md q-mx-lg q-my-sm ">
            <q-input v-model="text" label="Search by project name, token contract address or token symbol">
                <template v-slot:append>
                    <q-icon name="search"></q-icon>
                </template>
            </q-input>
        </div>
        <div class="q-pa-md">
            <q-table class="my-sticky-header-table" :rows="rows" :columns="columns" row-key="name" flat bordered>
                <template v-slot:body="props">
                    <q-tr :props="props">
                        <q-td key="projectName" :props="props">
                            <q-avatar size="lg">
                                <img :src="props.row.icon">
                            </q-avatar>
                            <span class="text-body1 text-justify q-ma-sm">{{ props.row.projectName }}</span>
                        </q-td>
                        <q-td key="type" :props="props">
                            <span class="text-purple-10 text-body1 bg-purple-1 q-pa-sm">{{ props.row.type }}</span>
                        </q-td>
                        <q-td key="participants" :props="props">
                            {{ props.row.participants }}
                        </q-td>
                        <q-td key="totalRaised" :props="props">
                            {{ props.row.totalRaised }}
                        </q-td>
                        <q-td key="currentPrice" :props="props">
                            {{ props.row.currentPrice }}
                        </q-td>
                        <q-td key="endIn" :props="props">
                            {{ timeFormat(props.row.endIn) }}
                        </q-td>
                    </q-tr>
                </template>
            </q-table>
        </div>
    </q-page>
</template>
<script>


import { defineComponent, ref } from 'vue'
import { columns, rows, swipe_data } from 'src/assets/data'

export default defineComponent({
    methods: {
        timeFormat(_date) {
            let f = function formatDate(time) {
                var date = new Date(time);
                var year = date.getFullYear(),
                    month = date.getMonth() + 1,//月份是从0开始的
                    day = date.getDate(),
                    hour = date.getHours(),
                    min = date.getMinutes(),
                    sec = date.getSeconds();
                var newTime = year + '-' +
                    month + '-' +
                    day + ' ' +
                    hour + ':' +
                    min + ':' +
                    sec;
                return newTime;
            }
            return f(_date)
        }
    },
    mounted() {
        this.slide = 1;
    },
    setup() {
        return {
            slide: ref(1),
            columns,
            rows
        }
    }
})





</script>