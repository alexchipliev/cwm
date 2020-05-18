<script>
  import { fade } from "svelte/transition";
  import {
    Icon,
    Row,
    Col,
    Button,
    Tabs,
    Tab,
    Input,
    Radio
  } from "svelte-chota";

  import {
    mdiPlusThick,
    mdiPencil,
    mdiCheckBold,
    mdiPrinter,
    mdiCarArrowRight,
    mdiDelete
  } from "@mdi/js";
  import Current from "./Current.svelte";
  import Queues from "./Queues.svelte";
  import { showNewOrder } from "./store.js";
  import { router } from "tinro";
</script>

<Col size="12" sizeMD="6" sizeLG="6">
  <div class="head">
    <h2>შეკვეთები</h2>
    <Button icon={mdiPlusThick} primary on:click={() => router.goto('/new')}>
      შეკვეთა
    </Button>
  </div>
  <Current />
</Col>
<Col size="12" sizeMD="6" sizeLG="6">
  <div class="head">
    <h2>რიგი</h2>
  </div>
  <Queues />
</Col>

<style>
  .head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
</style>
