<template>
    <div>
        <h2>ユーザー一覧</h2>
        <UserIndex />
    </div>
</template>

<script>
  import UserIndex from '../components/UserIndex'

  export default {
    name: 'test_user_index',

    components: {
      UserIndex,
    },
  }
</script>
