<template>
  <div class="min-h-screen w-full">
    <div class="w-full text-center">
      <div class="text-5xl">
        ให้คะแนนการให้บริการ
      </div>
      <div class="flex items-center flex-col">
        <div class="rate">
          <input type="radio" id="star5" name="rate" value="5 ★" v-model="points">
          <label for="star5" title="text">5 stars</label>
          <input type="radio" id="star4" name="rate" value="4 ★" v-model="points">
          <label for="star4" title="text">4 stars</label>
          <input type="radio" id="star3" name="rate" value="3 ★" v-model="points">
          <label for="star3" title="text">3 stars</label>
          <input type="radio" id="star2" name="rate" value="2 ★" v-model="points">
          <label for="star2" title="text">2 stars</label>
          <input type="radio" id="star1" name="rate" value="1 ★" v-model="points">
          <label for="star1" title="text">1 star</label>
        </div>
        <button class="text-3xl rounded w-min px-2 hover:bg-orange-600 bg-main inline-block" @click="rateUser">
          ยืนยัน
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ky from 'ky'
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'rate',
  setup () {
    const router = useRouter()

    const points = ref('')

    const rateUser = async (): Promise<void> => {
      try {
        const response = await ky.post('http://localhost:4000/rates', {
          json: {
            points: points.value
          }
        }).json()

        console.log(response)
        router.push('/firstpage')
      } catch (error) {
        // @ts-expect-error error is unknown
        const json = await error.response.json()
        alert(json.message)
      }
    }

    return {
      points,
      rateUser
    }
  }
})

</script>

<style scoped>
.rate {
    float: left;
    height: 46px;
    padding: 0 10px;
    margin-bottom: 50px;
}
.rate:not(:checked) > input {
    position:absolute;
    top:-9999px;
}
.rate:not(:checked) > label {
    float:right;
    width:1em;
    overflow:hidden;
    white-space:nowrap;
    cursor:pointer;
    font-size:70px;
    color:#ccc;
}
.rate:not(:checked) > label:before {
    content: '★ ';
}
.rate > input:checked ~ label {
    color: #ffc700;
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
    color: #deb217;
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
    color: #c59b08;
}
</style>
