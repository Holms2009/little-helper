<script lang="ts">
    import { DropDownMenu } from "@atoms";

    import icon from '@assets/images/icons/plus.svg';

    const menu: TDropDownMenuItem[] = [
      {value: 'Событие', target: 'add-event', targetModal: true},
      {value: 'День рождения', target: 'add-birthday', targetModal: true},
    ] 
</script>

<DropDownMenu menu={menu} buttonIcon={icon}/>