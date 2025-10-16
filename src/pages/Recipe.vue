<script setup>
import { ref, onMounted } from "vue";
import AppLayout from "@/layouts/AppLayout.vue";
import AppButton from "@/components/AppButton.vue";
import { useRoute } from "vue-router";
import { RecipeService } from "@/services";

const route = useRoute();
const recipeId = route?.params.id;
const recipe = ref(null);
const recipeUpdated = ref(null);
const isCreatingMode = ref(true);

const fetchRecipe = async () => {
  try {
    isCreatingMode.value = false;
    const data = await RecipeService.getRecipesById(recipeId);
    recipe.value = data;
    recipeUpdated.value = data;
  } catch (error) {}
};

onMounted(() => {
  if (parseInt(recipeId)) {
    fetchRecipe();
  }
});
</script>

<template>
  <AppLayout>
    <template #title> {{ isCreatingMode ? "Новый рецепт" : recipeUpdated.strMeal }} </template>
    <template #controls>
      <AppButton text="Сохранить" />
    </template>
    <template #inner>{{ recipeUpdated }}</template>
  </AppLayout>
</template>
