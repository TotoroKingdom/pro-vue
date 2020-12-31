<template>
    <div>
        <template v-for="item in this.menuList">
            <el-submenu :disabled="item.disabled"
                        :index="item.id +'' "
                        :route="item.url + '' "
                        v-if="item.children !== undefined  && item.children.length >0"
                        :key="item.id + '' ">

                <template slot="title">
                    <i :class="item.icon" style="color:lightgreen;"></i>
                    <span slot="title">{{item.menuName}}</span>
                </template>

                <MenuTree :menuList="item.children"></MenuTree>

            </el-submenu>

            <el-menu-item
                    v-else
                    :disabled="item.disabled"
                    :index="item.url + '' "
                    :route="item.url"
                    :key="item.id"

            >
                <i :class="item.icon" style="color:lightgreen;"></i>
                <span slot="title">{{item.menuName}}</span>
            </el-menu-item>

        </template>
    </div>
</template>

<script>
    export default {
        name: "MenuTree",
        props: ["menuList"]
    }
</script>

<style scoped>

</style>
