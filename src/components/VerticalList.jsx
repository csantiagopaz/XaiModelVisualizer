import Link from 'next/link'

function VerticalList({list, css_tag_ul, css_tag_li}){
    return (<div class={css_tag_ul}><ul >
    {list.map((element) =>(
      <li  class={css_tag_li}>
       
        <Link href={element.split(" ")[0]}>
        <a> {element} </a>
        </Link>
        </li>
    ))}
    </ul></div>
  );
}
  export default VerticalList;