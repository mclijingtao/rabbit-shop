// 封装category
import { getCategoryAPI } from "@/apis/category";
import { ref, onMounted } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";

export function useCategory(){
    const categoryData = ref({});
    const route = useRoute();
    const getCategory = async (id = route.params.id) => {
      const res = await getCategoryAPI(id);
      categoryData.value = res.data.result;
    };

    onMounted(() => getCategory());

    onBeforeRouteUpdate((to) => {
      getCategory(to.params.id);
    });

    return {
        categoryData
    }
}