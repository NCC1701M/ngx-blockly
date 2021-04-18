import { CustomBlock } from '../../../projects/ngx-blockly/src/lib/ngx-blockly/models/custom-block';
import { BlockMutator } from '../../../projects/ngx-blockly/src/lib/ngx-blockly/models/block-mutator';

declare var Blockly: any;

export class ExampleBlock extends CustomBlock {

    constructor(blockMutator: BlockMutator) {
        super('example_block', blockMutator);
        this.class = ExampleBlock;
    }

    public defineBlock() {
        this.block.appendDummyInput().appendField('example block');
        this.block.jsonInit({
            'mutator': 'example_mutator'
        });
    }

    public toPythonCode(block: ExampleBlock): string | any[] {
        return '';
    }
}
