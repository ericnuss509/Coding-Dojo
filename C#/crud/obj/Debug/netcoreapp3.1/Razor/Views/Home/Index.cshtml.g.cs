#pragma checksum "/Users/ericnuss/Documents/C#/crud/Views/Home/Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "242969336d8d265bf3c2717f770d6d269441d59d"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Index), @"mvc.1.0.view", @"/Views/Home/Index.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "/Users/ericnuss/Documents/C#/crud/Views/_ViewImports.cshtml"
using crud;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "/Users/ericnuss/Documents/C#/crud/Views/_ViewImports.cshtml"
using crud.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"242969336d8d265bf3c2717f770d6d269441d59d", @"/Views/Home/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b2c8bffb20ac4f86ad95d459398e060b917a66b7", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Dish>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n<h1>Welcome to CRUDelicious</h1>\r\n<h2>Here is a list of dishes</h2>\r\n\r\n");
#nullable restore
#line 6 "/Users/ericnuss/Documents/C#/crud/Views/Home/Index.cshtml"
     foreach (var item in ViewBag.dishes)
    {

#line default
#line hidden
#nullable disable
            WriteLiteral("        <p><a");
            BeginWriteAttribute("href", " href=\"", 149, "\"", 177, 2);
            WriteAttributeValue("", 156, "/details/", 156, 9, true);
#nullable restore
#line 8 "/Users/ericnuss/Documents/C#/crud/Views/Home/Index.cshtml"
WriteAttributeValue("", 165, item.DishId, 165, 12, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">");
#nullable restore
#line 8 "/Users/ericnuss/Documents/C#/crud/Views/Home/Index.cshtml"
                                      Write(item.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("</a> by ");
#nullable restore
#line 8 "/Users/ericnuss/Documents/C#/crud/Views/Home/Index.cshtml"
                                                        Write(item.Chef);

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\r\n");
#nullable restore
#line 9 "/Users/ericnuss/Documents/C#/crud/Views/Home/Index.cshtml"
    }

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<h3><a href=\"/newdish\">Add a new Dish</a></h3>");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Dish> Html { get; private set; }
    }
}
#pragma warning restore 1591
