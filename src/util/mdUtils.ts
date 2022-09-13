/* ---------------------------------------------------------------------------------------------
 *  Copyright (c) Applied Eng & Design All rights reserved.
 *  Licensed under the MIT License. See License.md in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
'use strict';

import { Code } from '../types';

export class MDUtils {
    static codeToMarkdown(title: string, code: Code): string {
        const md: Array<string> = [];
        md.push(`# ${title.toUpperCase()} - ${code.shortDesc}\n`);

        if (code.desc) {
            md.push(`## Description\n${code.desc}\n`);
        }

        if (code.modal) {
            md.push(`### Modal: ${code.modal ? 'true' : 'false'}\n`);
        }

        if (code.parameters) {
            md.push('## Parameters\n');
            md.push('| Parameter | Description | Optional |');
            for (const p in code.parameters) {
                md.push(`| ${p} | ${code.parameters[p].shortDesc} | ${code.parameters[p].optional ? 'true' : 'false'}`);
            }
        }

        return `${md.join('\n')}\n`;
    }
}
