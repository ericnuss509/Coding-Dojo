#pragma checksum "/Users/ericnuss/Documents/C#/modelfun/Views/Home/Userlist.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "0dc66618f4337b4a479c3628d587d7b7b0587411"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Userlist), @"mvc.1.0.view", @"/Views/Home/Userlist.cshtml")]
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
#line 1 "/Users/ericnuss/Documents/C#/modelfun/Views/_ViewImports.cshtml"
using modelfun;

#line default
#line hidden
#nullable disable
#nullable restore
#line 1 "/Users/ericnuss/Documents/C#/modelfun/Views/Home/Userlist.cshtml"
using modelfun.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"0dc66618f4337b4a479c3628d587d7b7b0587411", @"/Views/Home/Userlist.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"266db868368ce61966045e40ff0b1602dc36ca10", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Userlist : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<List<Person>>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\n");
#nullable restore
#line 4 "/Users/ericnuss/Documents/C#/modelfun/Views/Home/Userlist.cshtml"
 foreach(var persons in Model)
{

#line default
#line hidden
#nullable disable
            WriteLiteral("    <p>");
#nullable restore
#line 6 "/Users/ericnuss/Documents/C#/modelfun/Views/Home/Userlist.cshtml"
  Write(persons.FirstName);

#line default
#line hidden
#nullable disable
            WriteLiteral(" ");
#nullable restore
#line 6 "/Users/ericnuss/Documents/C#/modelfun/Views/Home/Userlist.cshtml"
                     Write(persons.LastName);

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\n");
#nullable restore
#line 7 "/Users/ericnuss/Documents/C#/modelfun/Views/Home/Userlist.cshtml"
    
}

#line default
#line hidden
#nullable disable
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<List<Person>> Html { get; private set; }
    }
}
#pragma warning restore 1591
