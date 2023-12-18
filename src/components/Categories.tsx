// import { ChevronDown } from "lucide-react";
// import MaxWidthWrapper from "./MaxWidthWrapper";
// import { CATGEORY_ITEMS } from "@/config";

// export const Categories = () => {
//   return (
//     <div className="flex flex-1 flex-grow w-full bg-white h-12 border-b items-center ">
//       <MaxWidthWrapper className="h-full">
//         <div className="w-full flex  h-full py-1 gap-1.5">
//           <button className="w-64 flex  hover:bg-blue-50 rounded-lg  items-center justify-between border-r border-slate-100 h-full px-3 group ">
//             <h5 className="font-medium text-blue-500 ">SHOP BY CATEGORY</h5>
//             <ChevronDown className="w-4 h-4" />
//           </button>
//           {CATGEORY_ITEMS.map((item) => (
//             <button className="px-3 flex items-center gap-1 hover:bg-accent rounded-lg text-slate-700 ">
//               <h5 className="font-medium">{item}</h5>
//               <ChevronDown className="w-4 h-4" />
//             </button>
//           ))}
//         </div>
//       </MaxWidthWrapper>
//     </div>
//   );
// };

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Icons } from "./Icons";
import { siteConfig } from "@/config";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useCategories } from "./hooks/useProducts";

interface MainNavProps {
  items?: MainNavItem[];
}




export function MainNav({ items }: MainNavProps) {

  const { data, isLoading } = useCategories();

console.log(data);
  return (
    <div className="hidden gap-6 lg:flex h-12 bg-white border-b items-center">
      <MaxWidthWrapper>
        {/* <Link href="/" className="hidden items-center space-x-2 lg:flex">
        <Icons.logo className="h-6 w-6" aria-hidden="true" />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
        <span className="sr-only">Home</span>
      </Link> */}
        <NavigationMenu>
          <NavigationMenuList>
            {/* {items?.[0]?.items ? (
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto">
                  {items[0].title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        >
                          <Icons.logo className="h-6 w-6" aria-hidden="true" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            {siteConfig.name}
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            {siteConfig.description}
                          </p>
                          <span className="sr-only">Home</span>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {items[0].items.map((item: any) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : null} */}
           
             
                  <NavigationMenuItem >
                    <NavigationMenuTrigger className="h-auto capitalize">
                      Shop by Category
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {data?.data.categories.map((item) => (
                          <ListItem
                            key={item.id}
                            title={item.name}
                            href={item.slug}
                          >
                            {item.name}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
             
              
          </NavigationMenuList>
        </NavigationMenu>
      </MaxWidthWrapper>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={String(href)}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
